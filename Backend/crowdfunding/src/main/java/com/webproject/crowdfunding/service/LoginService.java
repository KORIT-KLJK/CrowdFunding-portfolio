package com.webproject.crowdfunding.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.JwtRespDto;
import com.webproject.crowdfunding.dto.LoginReqDto;
import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.exception.CustomException;
import com.webproject.crowdfunding.exception.ErrorMap;
import com.webproject.crowdfunding.repository.UserRepository;
import com.webproject.crowdfunding.security.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService {

	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;
	private final PasswordEncoder passwordEncoder;
	private final UserRepository userRepository;
	
	public JwtRespDto login(LoginReqDto loginReqDto) {
		
		User userEntity = userRepository.findUserByEmail(loginReqDto.getEmail());
		
		if(userEntity == null || !passwordEncoder.matches(loginReqDto.getPassword(), userEntity.getPassword())) {
			throw new CustomException("로그인 실패", ErrorMap.builder().put("login", "사용자 정보를 확인하세요").build());
		}
		
		UsernamePasswordAuthenticationToken authenticationToken = 
				new UsernamePasswordAuthenticationToken(loginReqDto.getEmail(), loginReqDto.getPassword());
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		return jwtTokenProvider.generateToken(authentication);
	}
	
	public boolean authenticated(String accessToken) {
		return jwtTokenProvider.validateToken(jwtTokenProvider.getToken(accessToken));
	}
}
