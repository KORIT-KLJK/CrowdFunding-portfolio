package com.webproject.crowdfunding.service;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.PrincipalRespDto;
import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.repository.SignUpRepository;
import com.webproject.crowdfunding.security.JwtTokenProvider;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CreateTokenService {

	private final JwtTokenProvider jwtTokenProvider;
	private final SignUpRepository signUpRepository;
	
	// iuejeong: 요청 받은 token에 대한 인증을 하기 위해 값을 넘겨준다.
	public boolean authenticated(String accessToken) {
		return jwtTokenProvider.validateToken(jwtTokenProvider.getToken(accessToken));
	}
	
	// iuejeong: 유저 정보에 대한 확인을 위한 검사 과정
	// iuejeong: db에 있는 email과 요청으로 받은 token을 열어서 그 email이 일치한지 알아본다.
	public PrincipalRespDto getPrincipal(String accessToken) {
		Claims claims = jwtTokenProvider.getClaims(jwtTokenProvider.getToken(accessToken));
		User userEntity = signUpRepository.findUserByEmail(claims.getSubject());
		
		return PrincipalRespDto.builder()
				.userId(userEntity.getUserId())
				.email(userEntity.getEmail())
				.name(userEntity.getName())
				.authorities((String) claims.get("auth"))
				.build();
	}
	
}
