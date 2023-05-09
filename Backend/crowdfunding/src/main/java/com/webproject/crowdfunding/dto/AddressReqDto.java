package com.webproject.crowdfunding.dto;

import com.webproject.crowdfunding.entity.Address;

import lombok.Data;

@Data
public class AddressReqDto {
	private String zonecode;
	private String address;
	private String buildingName;
	private String bname;
	private String detailAddress;
	private String addressType;
	
	public Address toEntity() {
		return Address.builder()
				.zonecode(zonecode)
				.address(address)
				.buildingName(buildingName)
				.bname(bname)
				.detailAddress(detailAddress)
				.addressType(addressType)
				.build();
	}
}
