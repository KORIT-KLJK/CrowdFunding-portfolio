package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.MainService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/main")
public class MainController {
	
	private final MainService mainService;
	
	@GetMapping("/cardItemFunding")
	public ResponseEntity<?> CardItemFundingData() {
		return ResponseEntity.ok(mainService.toSaveCardItemFunding());
	}
	
	@GetMapping("/cardItemGiving")
	public ResponseEntity<?> CardItemGivingData() {
		return ResponseEntity.ok(mainService.toSaveCardItemGiving());
	}
	
	@GetMapping("/givingStatistics")
	public ResponseEntity<?> StatisticsGiverData() {
		return ResponseEntity.ok(mainService.giver());
	}
	
	@GetMapping("/fundingStatistics")
	public ResponseEntity<?> StatisticsFunderData() {
		return ResponseEntity.ok(mainService.funder());
	}
}
