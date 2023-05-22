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
	
	@GetMapping("/givingDetail/{pageId}")
	public ResponseEntity<?> givingDetail(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.givingDetail(pageId));
	}
	
	@GetMapping("/givings/most/{pageId}")
	public ResponseEntity<?> getMostGivings(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.getMostGivings(pageId));
	}
	
}
