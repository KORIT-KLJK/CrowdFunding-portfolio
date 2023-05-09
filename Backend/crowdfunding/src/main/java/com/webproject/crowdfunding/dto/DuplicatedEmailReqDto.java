package com.webproject.crowdfunding.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class DuplicatedEmailReqDto {
	@Email
	@NotBlank(message="이메일을 입력하세요")
	private String email;
}
