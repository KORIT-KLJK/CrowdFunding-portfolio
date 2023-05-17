package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.MainCardItemGivingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MainCradItemGivingController {
	
	private final MainCardItemGivingService mainCardItemGivingService;
	
	@GetMapping("/main/cardItemGiving")
	public ResponseEntity<?> CardItemGivingData() {
		return ResponseEntity.ok(mainCardItemGivingService.toSaveCardItemGiving());
	}
	
}
