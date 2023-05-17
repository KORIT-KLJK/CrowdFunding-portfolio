package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.FundingDetailService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FundingDetailController {
	
	private final FundingDetailService fundingDetailService;

	@GetMapping("/fundingdetail/{pageId}")
	public ResponseEntity<?> fundingDetail(@PathVariable int pageId) {

		return ResponseEntity.ok(fundingDetailService.fundingDetail(pageId));
	}
	
}
