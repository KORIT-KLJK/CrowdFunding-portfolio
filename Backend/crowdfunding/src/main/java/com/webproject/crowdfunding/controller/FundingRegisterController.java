package com.webproject.crowdfunding.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.req.FundingRegisterPageReqDto;
import com.webproject.crowdfunding.service.FundingRegisterPageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FundingRegisterController {

	private final FundingRegisterPageService fundingRegisterPageService;

	@ValidAspect
	@PostMapping("/admin/funding/registerpage")
	public ResponseEntity<?> registerPage(@Valid FundingRegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		System.out.println(registerPageReqDto);
		fundingRegisterPageService.registerPage(registerPageReqDto);
		return ResponseEntity.ok().body(true);
	}

}
