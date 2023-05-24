package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.GiverPaymentReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/giver")
public class GiverPaymentController {
	
	@PostMapping("/payment")
	public ResponseEntity<?> payment(@RequestBody GiverPaymentReqDto givingPaymentReqDto) {
		return null;
	}
	
}
