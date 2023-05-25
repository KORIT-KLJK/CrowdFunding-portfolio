package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.FunderReqDto;
import com.webproject.crowdfunding.entity.Reward;
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
	
	@GetMapping("/fundingreward/{pageId}")
	public ResponseEntity<?> fundingReward(@PathVariable int pageId) {
		
		return ResponseEntity.ok(fundingDetailService.getReward(pageId));
	}
	
	@GetMapping("/businessinfo/{pageId}")
	public ResponseEntity<?> fundingBusinessInfo(@PathVariable int pageId) {
		
		return ResponseEntity.ok(fundingDetailService.getBusinessInfo(pageId));
	}
	
	@GetMapping("/breakdown/{pageId}")
	public ResponseEntity<?> breakdown(@PathVariable int pageId) {
		
		return ResponseEntity.ok(fundingDetailService.getBreakdown(pageId));
	}
	
	@GetMapping("/funding/address")
	public ResponseEntity<?> getAddress(@RequestParam int userId) {
		System.out.println("userId: " + userId);
		return ResponseEntity.ok(fundingDetailService.getAddressId(userId));
	}
	
	@PostMapping("/auth/funding/payment")
	public ResponseEntity<?> toPaymentInfo(@RequestBody FunderReqDto funderReqDto) {
		return ResponseEntity.ok(fundingDetailService.saveFunder(funderReqDto));
	}
	
}















