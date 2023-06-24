package com.webproject.crowdfunding.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
public class LoginReqDto {
	@Email(message = "존재하지 않는 이메일입니다.")
	@NotBlank(message="이메일을 입력하세요")
	private String email;
	
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$",
			message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성")
	private String password;
}
