package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.FunderReqDto;
import com.webproject.crowdfunding.dto.req.FundingDeleteReqDto;
import com.webproject.crowdfunding.dto.req.FundingModifyReqDto;
import com.webproject.crowdfunding.service.FundingDetailService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/fundingdetail")
public class FundingDetailController {
	
	private final FundingDetailService fundingDetailService;

	@GetMapping("/{pageId}")
	public ResponseEntity<?> fundingDetail(@PathVariable int pageId) {
		
		return ResponseEntity.ok(fundingDetailService.fundingDetail(pageId));
	}
	
	@GetMapping("/reward/{pageId}")
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
	
	@GetMapping("/address")
	public ResponseEntity<?> getAddress(@RequestParam int userId) {
		return ResponseEntity.ok(fundingDetailService.getAddressId(userId));
	}
	
	@PostMapping("/auth/funding/payment")
	public ResponseEntity<?> toPaymentInfo(@RequestBody FunderReqDto funderReqDto) {
		return ResponseEntity.ok(fundingDetailService.saveFunder(funderReqDto));
	}
	
	@PutMapping("/admin/funding/modify")
	public ResponseEntity<?> toFundingModify(@RequestBody FundingModifyReqDto fundingModifyReqDto) {
		return ResponseEntity.ok(fundingDetailService.fundingModify(fundingModifyReqDto));
	}
	
	@DeleteMapping("/admin/funding/delete")
		public ResponseEntity<?> toFundingDelete(@RequestBody FundingDeleteReqDto fundingDeleteReqDto) {
		return ResponseEntity.ok(fundingDetailService.fundingDelete(fundingDeleteReqDto));
	}
	
}















