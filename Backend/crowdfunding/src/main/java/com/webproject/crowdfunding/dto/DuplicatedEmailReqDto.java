package com.webproject.crowdfunding.dto;

import javax.validation.constraints.Email;

import lombok.Data;

@Data
public class DuplicatedEmailReqDto {
	@Email
	private String email;
}
