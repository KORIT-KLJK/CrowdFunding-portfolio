package com.webproject.crowdfunding.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.req.RegisterPageReqDto;
import com.webproject.crowdfunding.service.FundingRegisterPageService;
import com.webproject.crowdfunding.service.GiveRegsterPageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FundingRegisterController {

	private final FundingRegisterPageService fundingRegisterPageService;

	
	@ValidAspect
	@PostMapping("/fundingregisterpage")
	public ResponseEntity<?> registerPage(@Valid @RequestBody RegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		System.out.println(registerPageReqDto);
		fundingRegisterPageService.registerPage(registerPageReqDto);
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/fundingregisterbusinessinfo")
	public ResponseEntity<?> registerBusinessInfo(@Valid @RequestBody RegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		fundingRegisterPageService.registerBusinessInfo(registerPageReqDto);
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/fundingregisterreward")
	public ResponseEntity<?> registerReward(@Valid @RequestBody RegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		fundingRegisterPageService.registerReward(registerPageReqDto);
		return ResponseEntity.ok().body(true);
	}
	
}
