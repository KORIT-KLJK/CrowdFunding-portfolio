package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.CreateTokenService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class TokenController {

	private final CreateTokenService createTokenService;
	
	@GetMapping("/authenticated")
	public ResponseEntity<?> authenticated(String accessToken) {
		
		return ResponseEntity.ok().body(createTokenService.authenticated(accessToken));
	}
	
	@GetMapping("/principal")
	public ResponseEntity<?> principal(String accessToken) {
		
		return ResponseEntity.ok().body(createTokenService.getPrincipal(accessToken));
	}
	
}
