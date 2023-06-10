package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.FundingDeleteReqDto;
import com.webproject.crowdfunding.dto.req.FundingModifyReqDto;
import com.webproject.crowdfunding.dto.req.GivingModifyReqDto;
import com.webproject.crowdfunding.service.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
	
	private final AdminService adminService;

	@PutMapping("/funding/modify")
	public ResponseEntity<?> toFundingModify(@RequestBody FundingModifyReqDto fundingModifyReqDto) {
		return ResponseEntity.ok(adminService.fundingModify(fundingModifyReqDto));
	}
	
	@DeleteMapping("/funding/delete")
		public ResponseEntity<?> toFundingDelete(@RequestBody FundingDeleteReqDto fundingDeleteReqDto) {
		return ResponseEntity.ok(adminService.fundingDelete(fundingDeleteReqDto));
	}
	
	@PutMapping("/giving/modify")
	public ResponseEntity<?> givingModifyInfo(@RequestBody GivingModifyReqDto givingModifyReqDto) {
		return ResponseEntity.ok(adminService.givingModify(givingModifyReqDto));
	}
	
	@DeleteMapping("/giving/delete/{pageId}")
	public ResponseEntity<?> givingDeleteInfo(@PathVariable int pageId) {
		return ResponseEntity.ok(adminService.givingDelete(pageId));
	}
	
}
