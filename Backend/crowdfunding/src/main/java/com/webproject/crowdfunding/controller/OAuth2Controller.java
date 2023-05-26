package com.webproject.crowdfunding.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.aop.ValidAspect;
import com.webproject.crowdfunding.dto.AddressReqDto;
import com.webproject.crowdfunding.dto.req.OAuth2SignUpReqDto;
import com.webproject.crowdfunding.service.OAuth2Service;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class OAuth2Controller {

	private final OAuth2Service oAuth2Service;
	
	@ValidAspect
	@PostMapping("/auth/oauth2/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody OAuth2SignUpReqDto oAuth2SignUpReqDto, BindingResult bindingResult) {
		oAuth2Service.oauth2signUp(oAuth2SignUpReqDto);
		// iuejeong: ok = 일반적으로 성공했다는 의미를 표시.
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/auth/oauth2/address")
	public ResponseEntity<?> address(@Valid @RequestBody AddressReqDto addressReqDto, BindingResult bindingResult) {
		oAuth2Service.address(addressReqDto);
		return ResponseEntity.ok().body(true);
	}
	
}
