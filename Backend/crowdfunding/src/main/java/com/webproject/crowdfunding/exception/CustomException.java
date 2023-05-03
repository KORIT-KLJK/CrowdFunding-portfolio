package com.webproject.crowdfunding.exception;

import java.util.Map;

import lombok.Getter;

@Getter
public class CustomException extends RuntimeException {
	// runtimeexception은 unchecked exception 예외처리, 프로그램이 잘 돌다가 서버중단  
	private Map<String, String> errorMap;

	public CustomException(String message) {
		super(message);
		

	}
	public CustomException(String message, Map<String, String> errorMap) {
		super(message);
		this.errorMap = errorMap;
	}
}
