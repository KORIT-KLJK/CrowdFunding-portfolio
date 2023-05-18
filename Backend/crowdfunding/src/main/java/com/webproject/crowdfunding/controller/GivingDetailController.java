package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.GivingDetailService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class GivingDetailController {
	
	private final GivingDetailService givingDetailService;
	
	@GetMapping("/givingDetail/{givingId}")
	public ResponseEntity<?> givingDetail(@PathVariable int givingId) {
		return ResponseEntity.ok(givingDetailService.givingDetail(givingId));
	}
	
}
