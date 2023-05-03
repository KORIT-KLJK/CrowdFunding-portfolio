package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.LoginReqDto;

@RestController
public class LoginController {
	
	@PostMapping
	public ResponseEntity<?> login(LoginReqDto loginReqDto) {
		return null;
	}
	
}
