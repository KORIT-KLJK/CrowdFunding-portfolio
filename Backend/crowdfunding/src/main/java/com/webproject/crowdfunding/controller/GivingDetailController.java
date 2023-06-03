package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.GiverPaymentReqDto;
import com.webproject.crowdfunding.dto.req.GivingModifyReqDto;
import com.webproject.crowdfunding.service.GivingDetailService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/givingdetail")
public class GivingDetailController {
	
	private final GivingDetailService givingDetailService;
	
	@GetMapping("/{pageId}")
	public ResponseEntity<?> givingDetail(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.givingDetail(pageId));
	}
	
	@GetMapping("/most/{pageId}")
	public ResponseEntity<?> getMostGivings(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.getMostGivings(pageId));
	}
	
	@GetMapping("/participation/{pageId}")
	public ResponseEntity<?> participationDetails(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.getParticipationDetails(pageId));
	}
	
	@GetMapping("/donationuseplan/{pageId}")
	public ResponseEntity<?> donationUsePlan(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.getDonationUsePlan(pageId));
	}
	
	@GetMapping("/targetbenefit/{pageId}")
	public ResponseEntity<?> targetBenefit(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.getTargetBenefit(pageId));
	}

}
