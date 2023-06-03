package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.FunderReqDto;
import com.webproject.crowdfunding.dto.req.GiverPaymentReqDto;
import com.webproject.crowdfunding.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	
	private final AuthService authService;

	@PostMapping("/funding/payment")
	public ResponseEntity<?> toPaymentInfo(@RequestBody FunderReqDto funderReqDto) {
		return ResponseEntity.ok(authService.saveFunder(funderReqDto));
	}
	
	@PostMapping("/giving/payment")
	public ResponseEntity<?> payment(@RequestBody GiverPaymentReqDto giverPaymentReqDto) {
		return ResponseEntity.ok().body(authService.paymentGiver(giverPaymentReqDto));
	}
	
}
