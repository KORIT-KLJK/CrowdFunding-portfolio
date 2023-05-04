package com.webproject.crowdfunding.security;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.webproject.crowdfunding.dto.ErrorResponseDto;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);	// (application/json)과 동일
		response.setStatus(HttpStatus.UNAUTHORIZED.value());	// 401
		ErrorResponseDto<?> errorResponseDto = 
				new ErrorResponseDto<AuthenticationException>("토큰 인증 실패", authException);
		ObjectMapper objectMapper = new ObjectMapper();
		
		String responseJson = objectMapper.writeValueAsString(errorResponseDto);	// Json으로 변환
		
		PrintWriter out = response.getWriter();
		out.println(responseJson);
		
	}

}






