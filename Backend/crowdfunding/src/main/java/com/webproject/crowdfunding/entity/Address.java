package com.webproject.crowdfunding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
	private int addressId;
	private int userId;
	private int zonecode;
	private String address;
	private String buildingName;
	private String bname;
	private String detailAddress;
	private String addressType;
}
