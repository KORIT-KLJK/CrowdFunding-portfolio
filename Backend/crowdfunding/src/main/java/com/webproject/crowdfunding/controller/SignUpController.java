package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.SignUpReqDto;

@RestController
public class SignUpController {

	@PostMapping("/signup")
	public ResponseEntity<?> signup(SignUpReqDto signUpReqDto) {
		return ResponseEntity.ok().body();
	}
	
}
