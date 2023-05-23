package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.RegisterPageReqDto;
import com.webproject.crowdfunding.service.FundingRegisterPageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FundingRegisterController {

	private final FundingRegisterPageService fundingRegisterPageService;

	
	@PostMapping("/fundingregisterpage")
	public ResponseEntity<?> registerPage(RegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		System.out.println(registerPageReqDto);
		fundingRegisterPageService.registerPage(registerPageReqDto);
		return ResponseEntity.ok().body(true);
	}
	
}
