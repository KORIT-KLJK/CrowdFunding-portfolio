package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.GivingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class GivingMainController {
	private final GivingService givingService;
	
	@GetMapping("/giving/category")
	public ResponseEntity<?> givingCategory() {
		return ResponseEntity.ok(givingService.givingCategory());
	}
}
