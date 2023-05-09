package com.webproject.crowdfunding.dto;

import javax.validation.constraints.NotBlank;

import com.webproject.crowdfunding.entity.Address;

import lombok.Data;

@Data
public class AddressReqDto {
	@NotBlank(message = "우편번호는 필수 입력 값입니다.")
	private String zonecode;
	@NotBlank(message = "주소는 필수 입력 값입니다.")
	private String address;
	private String buildingName;
	private String bname;
	@NotBlank(message = "상세 주소는 필수 입력 값입니다.")
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
