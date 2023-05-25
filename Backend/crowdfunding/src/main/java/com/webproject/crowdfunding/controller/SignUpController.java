package com.webproject.crowdfunding.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.AddressReqDto;
import com.webproject.crowdfunding.dto.DuplicatedEmailReqDto;
import com.webproject.crowdfunding.dto.SignUpReqDto;
import com.webproject.crowdfunding.service.SignUpService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class SignUpController {
	
	private final SignUpService signUpService;
	
	@ValidAspect
	@PostMapping("/auth/checkemail")
	public ResponseEntity<?> duplicatedEmail(@Valid @RequestBody DuplicatedEmailReqDto email, BindingResult bindingResult) {
		System.out.println(email);
		signUpService.duplicatedEmail(email.getEmail());
		return ResponseEntity.ok().body(true);
	}
	
	// iuejeong: Post요청의 데이터 처리
	// iuejeong: @Valid를 달아주면 dto 안에 있는 email(), Pattern()을 검사해준다
	// iuejeong: @Valid와 BindingResult는 세트임. signUpReqDto의 오류를 BindingResult에게 모두 넘겨준다.
	@ValidAspect
	@PostMapping("/auth/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignUpReqDto signUpReqDto, BindingResult bindingResult) {
		signUpService.signUp(signUpReqDto);
		// iuejeong: ok = 일반적으로 성공했다는 의미를 표시.
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/auth/address")
	public ResponseEntity<?> address(@Valid @RequestBody AddressReqDto addressReqDto, BindingResult bindingResult) {
		signUpService.address(addressReqDto);
		return ResponseEntity.ok().body(true);
	}
	
}
