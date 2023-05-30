package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.GivingModifyReqDto;
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
	
	@PutMapping("/admin/giving/modify")
	public ResponseEntity<?> givingModifyInfo(@RequestBody GivingModifyReqDto givingModifyReqDto) {
		return ResponseEntity.ok(givingDetailService.givingModify(givingModifyReqDto));
	}
	
	@DeleteMapping("/admin/giving/delete/{pageId}")
	public ResponseEntity<?> givingDeleteInfo(@PathVariable int pageId) {
		return ResponseEntity.ok(givingDetailService.givingDelete(pageId));
	}

}
