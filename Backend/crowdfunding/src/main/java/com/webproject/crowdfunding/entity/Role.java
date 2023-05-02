package com.webproject.crowdfunding.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Role {
	private int roleId;
	private String roleName;
}
