package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.MainCardItemFundingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MainCardItemFundingController {
	
	private final MainCardItemFundingService mainCardItemFundingService;
	
	@GetMapping("/main/cardItemFunding")
	public ResponseEntity<?> CardItemFundingData() {
		return ResponseEntity.ok(mainCardItemFundingService.toSaveCardItemFunding());
	}
	
}
