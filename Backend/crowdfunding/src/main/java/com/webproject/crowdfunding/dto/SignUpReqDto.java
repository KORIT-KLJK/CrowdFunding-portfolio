package com.webproject.crowdfunding.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.webproject.crowdfunding.entity.User;

import lombok.Data;

@Data
public class SignUpReqDto {
	@Email
	@NotBlank(message="이메일을 입력하세요")
	private String email;
	
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$",
			message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성")
	private String password;
	
	@Pattern(regexp = "^[가-힣]{2,7}$",
			message = "이름은 한글이름만 작성가능합니다.")
	private String name;
	private String birthday;
	private String gender;
	
	public User toEntity() {
		return User.builder()
				.email(email)
				.password(new BCryptPasswordEncoder().encode(password))
				.name(name)
				.birthday(birthday)
				.gender(gender)
				.build();
	}
}
