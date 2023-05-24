package com.webproject.crowdfunding.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {

	private final JwtTokenProvider jwtTokenProvider;
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;	// iuejeong: 형변환을 해주지 않으면 getHeader를 들고올 수 없다.
		// code8144: 생성된 토큰은 HTTP 통신을 할 때 Authorization이라는 key의 value로 사용된다. 일반적으로 value에는 Bearer가 앞에 붙여진다.
		String accessToken = httpRequest.getHeader("Authorization");	// iuejeong: 기존 토큰을 가져옴
		accessToken = jwtTokenProvider.getToken(accessToken);			// iuejeong: 가져온 것은 subString
		boolean validationFlag = jwtTokenProvider.validateToken(accessToken);	// iuejeong: subString 이후 유효성 검사 진행(예외가 일어나고 true, false 검사)
		// iuejeong: false일 경우, Authentication 객체를 생성하지 못했기 때문에 403 error가 뜰 것임
		if(validationFlag) {
			Authentication authentication = jwtTokenProvider.getAuthentication(accessToken);
			
			// iuejeong: 이 안에 등록이 되어야지만 로그인이 된 것
			// iuejeong: true로 바꿔주는 과정
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		
		chain.doFilter(request, response);
		
	}

	
}
