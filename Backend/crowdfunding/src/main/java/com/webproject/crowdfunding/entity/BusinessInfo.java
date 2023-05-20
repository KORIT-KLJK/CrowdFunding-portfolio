package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.BusinessInfoRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BusinessInfo {
	private String pageCategory;
	private int businessInfoId;
	private String companyName;
	private String ceoName;
	private String companyAddress;
	private String companyPhoneNumber;
	private String ceoEmail;
	private int fundingId;
	
	public BusinessInfoRespDto toBusinessInfo() {
		return BusinessInfoRespDto.builder()
				.businessInfoId(businessInfoId)
				.companyName(companyName)
				.ceoName(ceoName)
				.companyAddress(companyAddress)
				.companyPhoneNumber(companyPhoneNumber)
				.ceoEmail(ceoEmail)
				.fundingId(fundingId)
				.build();
	}
}
