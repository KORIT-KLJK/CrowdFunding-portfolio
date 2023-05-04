package com.webproject.crowdfunding.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.webproject.crowdfunding.entity.User;

import lombok.Data;

@Data
public class SignUpReqDto {

	private String email;
	
	private String password;
	
	private String name;
	
	private String birthday;
	private String gender;
	private String address;
	
	public User toEntity() {
		return User.builder()
				.name(name)
				.password(new BCryptPasswordEncoder().encode(password))
				.email(email)
				.birthday(birthday)
				.address(address)
				.gender(gender)
				.build();
	}
}
