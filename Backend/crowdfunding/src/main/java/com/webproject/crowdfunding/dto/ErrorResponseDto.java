package com.webproject.crowdfunding.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponseDto<T> {
	private String message;
	private T errorData; // code8144: errormap

}
