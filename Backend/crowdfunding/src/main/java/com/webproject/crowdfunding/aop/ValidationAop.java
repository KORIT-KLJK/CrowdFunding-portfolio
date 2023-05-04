package com.webproject.crowdfunding.aop;

import java.util.HashMap;
import java.util.Map;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;

import com.webproject.crowdfunding.exception.CustomException;

@Aspect
@Component
public class ValidationAop {
	
	// iuejeong: 모든 정보를 다 들고 온다.(Controller에 있는 @Valid의 정보를 들고오는 것)
	// iuejeong: 접근지정자 public은 생략 가능
	// iuejeong: com 앞에 *이 붙는다면 return 반환 type이 됨, com부터는 쭉 경로임
	// iuejeong: ..을 찍어버리면 하위의 모든 것을 의미함.
	@Pointcut("@annotation(com.webproject.crowdfunding.aop.ValidAspect)")
	private void pointCut() {}
	
	@Around("pointCut()")
	public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
		
		// iuejeong: [0]: Dto, [1]: BindingResult
		// iuejeong: 하지만 Dto의 오류를 전부 BindingResult한테 넘기기 때문에 실질적은 오류에 관한 모든 정보는 BindingResult한테 있다.
		Object[] args = joinPoint.getArgs();
		BindingResult bindingResult = null;
		
		for(Object arg : args) {
			if(arg.getClass() == BeanPropertyBindingResult.class) {
				bindingResult = (BeanPropertyBindingResult) arg;
			}
		}
		
		// iuejeong: 오류가 생길 경우, CustomException이 AdviceController로 넘어감
		if(bindingResult.hasErrors()) {
			Map<String, String> errorMap = new HashMap<>();
			
			bindingResult.getFieldErrors().forEach(error -> {
				errorMap.put(error.getField(), error.getDefaultMessage());
			});
			throw new CustomException("Validation Failed", errorMap);
		}
		
		// iuejeong: proceed = 메소드 호출. pointCut을 이용해서 메소드를 정할 것임.
		return joinPoint.proceed();
	}
}
