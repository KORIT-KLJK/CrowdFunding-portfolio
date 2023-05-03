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
		
		HttpServletRequest httpRequest = (HttpServletRequest) request; 
		String accessToken = httpRequest.getHeader("Authorization");// 생성된 토큰은 HTTP 통신을 할 때 Authorization이라는 key의 value로 사용된다. 일반적으로 value에는 Bearer이 앞에 붙여진다.
		accessToken = jwtTokenProvider.getToken(accessToken);
		boolean validationFlag = jwtTokenProvider.validateToken(accessToken);
		
		if(validationFlag) {
			Authentication authentication = jwtTokenProvider.getAuthentication(accessToken);
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		
		chain.doFilter(request, response);
		
	}

	
}
