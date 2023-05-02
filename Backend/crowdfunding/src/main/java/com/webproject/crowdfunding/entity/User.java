package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class User {
	private String name;
	private String password;
	private String email;
	private LocalDate birthDate;
	private String gender;
	private String address;
	private int roleId;
}
