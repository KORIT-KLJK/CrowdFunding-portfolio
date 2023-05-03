package com.webproject.crowdfunding.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Authority {
	private int authorityId;
	private int userId;
	private int roleId;
	
	private Role role;
}
