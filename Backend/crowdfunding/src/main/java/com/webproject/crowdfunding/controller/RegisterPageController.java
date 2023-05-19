package com.webproject.crowdfunding.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.req.RegisterPageReqDto;

import lombok.RequiredArgsConstructor;

@RestController
public class RegisterPageController {

	@ValidAspect
	@PostMapping("/registerpage")
	public ResponseEntity<?> registerPage(@Valid @RequestBody RegisterPageReqDto registerPageReqDto, BindingResult bindingResult) {
		System.out.println(registerPageReqDto);
		return null;
	}
	
}
