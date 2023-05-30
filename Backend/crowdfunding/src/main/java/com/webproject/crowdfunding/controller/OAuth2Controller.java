package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.AddressReqDto;
import com.webproject.crowdfunding.dto.req.OAuth2ProviderMergeReqDto;
import com.webproject.crowdfunding.dto.req.OAuth2SignUpReqDto;
import com.webproject.crowdfunding.security.JwtTokenProvider;
import com.webproject.crowdfunding.service.OAuth2Service;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class OAuth2Controller {

	private final JwtTokenProvider jwtTokenProvider;
	private final OAuth2Service oAuth2Service;
	
	
	
	@PostMapping("/oauth2/signup")
	public ResponseEntity<?> signup(
			@RequestHeader(value="registerToken") String registerToken,
			@RequestBody OAuth2SignUpReqDto oAuth2SignUpReqDto) {
		boolean validated = jwtTokenProvider.validateToken(jwtTokenProvider.getToken(registerToken));
		
		if(!validated) {
			// 토큰이 유효하지 않음.
			return ResponseEntity.badRequest().body("회원가입 요청 시간이 초과하였습니다.");
		}
		
		return ResponseEntity.ok().body(oAuth2Service.oauth2signUp(oAuth2SignUpReqDto));
	}
	
	@PutMapping("/oauth2/merge")
	public ResponseEntity<?> providerMerge(@RequestBody OAuth2ProviderMergeReqDto oAuth2ProviderMergeReqDto) {
		System.out.println(oAuth2ProviderMergeReqDto);
		if(!oAuth2Service.checkPassword(oAuth2ProviderMergeReqDto.getEmail(), oAuth2ProviderMergeReqDto.getPassword())) {
			return ResponseEntity.badRequest().body("비밀번호가 일치하지 않습니다.");
		}
		
		return ResponseEntity.ok(oAuth2Service.oAuth2ProviderMerge(oAuth2ProviderMergeReqDto));
	}
	
	@PostMapping("/oauth2/address")
	public ResponseEntity<?> address(@RequestBody AddressReqDto addressReqDto) {
		oAuth2Service.address(addressReqDto);
		return ResponseEntity.ok().body(true);
	}
	
}
