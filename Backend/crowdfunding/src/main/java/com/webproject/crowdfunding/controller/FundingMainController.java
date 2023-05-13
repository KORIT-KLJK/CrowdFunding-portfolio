package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.SearchFundingReqDto;
import com.webproject.crowdfunding.service.FundingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FundingMainController {
 
	private final FundingService fundingService;
	
	@GetMapping("/funding/main")
	public ResponseEntity<?> fundingData() {
		return ResponseEntity.ok(fundingService.toSaveFunding());
	}
	
	@GetMapping("/funding/category")
	public ResponseEntity<?> fundingCategory() {
		return ResponseEntity.ok(fundingService.fundingCategory());
	}
	
}






