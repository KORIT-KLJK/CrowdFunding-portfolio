package com.webproject.crowdfunding.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.SignUpReqDto;
import com.webproject.crowdfunding.service.SignUpService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class SignUpController {
	
	private final SignUpService signUpService;
	// iuejeong: Post요청의 데이터 처리
	// iuejeong: @Valid를 달아주면 dto 안에 있는 email(), Pattern()을 검사해준다
	// iuejeong: @Valid와 BindingResult는 세트임. signUpReqDto의 오류를 BindingResult에게 모두 넘겨준다.
	@ValidAspect
	@PostMapping("/auth/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignUpReqDto signUpReqDto, BindingResult bindingResult) {
		System.out.println(signUpReqDto);
		signUpService.signUp(signUpReqDto);
		signUpService.duplicatedEmail(signUpReqDto.getEmail());
		// iuejeong: ok = 일반적으로 성공했다는 의미를 표시.
		return ResponseEntity.ok().body(true);
	}
	
}
