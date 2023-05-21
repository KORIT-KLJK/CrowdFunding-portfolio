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
public class GiveRegisterController {

	private final GiveRegsterPageService giveRegsterPageService;
	
	@ValidAspect
	@PostMapping("/giveregistercenter")
	public ResponseEntity<?> registerCenter(@Valid @RequestBody RegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		giveRegsterPageService.registerCenter(registerPageReqDto);
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/giveregisterpage")
	public ResponseEntity<?> registerPage(@Valid @RequestBody RegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		giveRegsterPageService.giveRegisterPage(registerPageReqDto);
		return ResponseEntity.ok().body(true);
	}
	
	
	@ValidAspect
	@PostMapping("/giveregisterrest")
	public ResponseEntity<?> registerBenefit(@Valid @RequestBody RegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		giveRegsterPageService.registerBenefitAndTarget(registerPageReqDto);
		return ResponseEntity.ok().body(true);
	}
	
}
