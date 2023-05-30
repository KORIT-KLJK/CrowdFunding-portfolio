package com.webproject.crowdfunding.entity;

import java.util.List;

import com.webproject.crowdfunding.security.PrincipalUserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	private int userId;
	private String email;
	private String password;
	private String name;
	private String birthday;
	private String gender;
	private String provider;
	private int addressId;
	
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
