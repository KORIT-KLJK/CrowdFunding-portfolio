package com.webproject.crowdfunding.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.LoginReqDto;
import com.webproject.crowdfunding.service.LoginService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class LoginController {
	
	private final LoginService loginService;
	
	@ValidAspect
	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginReqDto loginReqDto, BindingResult bindingResult) {
		// iuejeong: 값을 ok 안에 넣거나, body 안에 넣거나 똑같다. 하지만 badRequest는 안 됨. ok만 가능
		return ResponseEntity.ok(loginService.login(loginReqDto));
	}
	
	@GetMapping("/auth/authenticated")
	public ResponseEntity<?> authenticated(@RequestHeader(value = "Authorization") String accessToken) {
		System.out.println(accessToken);
		return ResponseEntity.ok().body(loginService.authenticated(accessToken));
	}
}
