package com.webproject.crowdfunding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Center {
	private int centerId;
	private String pageCategory;
	private String centerName;
	private String centerAddress;
	private String centerPhoneNumber;
	private String centerCeo;
}
