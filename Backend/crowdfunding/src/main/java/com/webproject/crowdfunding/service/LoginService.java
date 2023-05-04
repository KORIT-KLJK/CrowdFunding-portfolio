package com.webproject.crowdfunding.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.JwtRespDto;
import com.webproject.crowdfunding.dto.LoginReqDto;
import com.webproject.crowdfunding.security.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService {

	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;
	
	// iuejeong: login을 하면서 jwt token을 발급해주는 과정
	public JwtRespDto login(LoginReqDto loginReqDto) {
		
		// iuejeong: 아이디와 패스워드를 검토해서 토큰을 발급하기 때문에 controller에서 받아준다
		// iuejeong: 우리는 email과 password로 로그인을 할 것이기 때문에 email을 받는 것
		UsernamePasswordAuthenticationToken authenticationToken = 
				new UsernamePasswordAuthenticationToken(loginReqDto.getEmail(), loginReqDto.getPassword());
		
		// iuejeong: authenticationManagerBuilder가 인증 체계를 관리하기 때문에 이메일과 비밀번호를 넘겨준다.
		// iuejeong: authenticationManagerBuilder가 만들어진 순간에 PrincipalDetailsService 안에 있는 loadUserByUsername이 실행이 되고 인증 과정에 들어간다.
		// iuejeong: 인증이 성공을 하게 되면 Authentication 객체가 생성이 된다.
		// iuejeong: 토큰의 대한 정보를 넣고, 생성을 하기 위해 인증 성공한 정보를 return값에 넣어준다.
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		return jwtTokenProvider.generateToken(authentication);
	}
	
}
