package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.req.GivingModalPayReqDto;
import com.webproject.crowdfunding.service.GivingDetailService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class GivingDetailController {
	
	private final GivingDetailService givingDetailService;
	
	@GetMapping("/giving/detail/{pageId}")
	public ResponseEntity<?> givingDetail(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.givingDetail(pageId));
	}
	
	@GetMapping("/giving/most/{pageId}")
	public ResponseEntity<?> getMostGivings(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.getMostGivings(pageId));
	}
	
	@PostMapping("/giving/modal/{pageId}")
	public ResponseEntity<?> givingModal(@RequestBody GivingModalPayReqDto givingModalReqDto) {
		return null;
	}
	
}
