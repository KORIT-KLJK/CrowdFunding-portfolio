package com.webproject.crowdfunding.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.req.FundingRegisterPageReqDto;
import com.webproject.crowdfunding.dto.req.GivingRegisterReqDto;
import com.webproject.crowdfunding.service.FundingRegisterPageService;
import com.webproject.crowdfunding.service.GiveRegsterPageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class GiveRegisterController {

	private final GiveRegsterPageService giveRegsterPageService;
	
	@ValidAspect
	@PostMapping("/giveregisterpage")
	public ResponseEntity<?> registerPage(@Valid GivingRegisterReqDto givingRegisterReqDto, BindingResult bindingResult) {
		giveRegsterPageService.giveRegisterPage(givingRegisterReqDto);
		return ResponseEntity.ok().body(true);
	}
	

	
}
