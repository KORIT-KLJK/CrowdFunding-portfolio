package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.SearchFundingReqDto;
import com.webproject.crowdfunding.service.FundingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FundingController {

	private final FundingService fundingService;
	
	@GetMapping("/funding/main")
	public ResponseEntity<?> fundingData() {
		
		return ResponseEntity.ok(fundingService.toSaveFunding());
	}
	// post get의 사용 용도
	// post: web -> DB	insert 저장
	// get: DB -> web select 조회 
	// put: web -> DB update 수정
	// delete web -> DB 
}
