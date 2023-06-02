package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.FundingEventReqDto;
import com.webproject.crowdfunding.service.FundingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/funding")
public class FundingMainController {
 
	private final FundingService fundingService;
	
	@GetMapping("/main")
	public ResponseEntity<?> fundingData(FundingEventReqDto fundingMainReqDto) {
		System.out.println(fundingMainReqDto);
		return ResponseEntity.ok(fundingService.toSaveFunding(fundingMainReqDto));
	}
	
	@GetMapping("/category")
	public ResponseEntity<?> fundingCategory() {
		return ResponseEntity.ok(fundingService.fundingCategory());
	}
	
}






