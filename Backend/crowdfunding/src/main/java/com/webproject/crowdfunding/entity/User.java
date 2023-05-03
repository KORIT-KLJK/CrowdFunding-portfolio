package com.webproject.crowdfunding.entity;

import java.time.LocalDate;
import java.util.List;

import com.webproject.crowdfunding.security.PrincipalUserDetails;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class User {
	private int userId;
	private String name;
	private String password;
	private String email;
	private LocalDate birthDate;
	private String gender;
	private String address;
	
	private List<Authority> authorities;
	
	public PrincipalUserDetails toPrincipal() {
		return PrincipalUserDetails.builder()
				.userId(userId)
				.email(email)
				.password(password)
				.roles(authorities)
				.build();
	}
}
