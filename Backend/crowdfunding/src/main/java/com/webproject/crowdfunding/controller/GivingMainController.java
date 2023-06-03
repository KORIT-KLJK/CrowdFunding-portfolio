package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.SearchGivingReqDto;
import com.webproject.crowdfunding.service.GivingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/giving")
public class GivingMainController {
	private final GivingService givingService;
	
	@GetMapping("/main")
	public ResponseEntity<?> givingData(SearchGivingReqDto searchGivingReqDto) {
		return ResponseEntity.ok(givingService.toSaveGiving(searchGivingReqDto));
	}
	
	@GetMapping("/category")
	public ResponseEntity<?> givingCategory() {
		return ResponseEntity.ok(givingService.givingCategory());
	}
	
	@GetMapping("/today")
	public ResponseEntity<?> todayGiving() {
		return ResponseEntity.ok(givingService.getTodayGiving());
	}
	
}
