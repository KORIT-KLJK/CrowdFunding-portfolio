package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.AccountService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AccountController {

	private final AccountService accountService;
	
	@GetMapping("/principal")
	public ResponseEntity<?> principal() {
		return ResponseEntity.ok().body(accountService.getPrincipal());
	}
	
}
