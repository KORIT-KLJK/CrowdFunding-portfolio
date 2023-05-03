package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.ErrorResponseDto;
import com.webproject.crowdfunding.exception.CustomException;

@RestController
public class AdviceController {

	// iuejeong: BindingResult에서 받은 error값 처리
	@ExceptionHandler(CustomException.class)
	public ResponseEntity<?> customException(CustomException e) {
		return ResponseEntity.badRequest().body(new ErrorResponseDto<>(e.getMessage(), e.getErrorMap()));
	}
	
}
