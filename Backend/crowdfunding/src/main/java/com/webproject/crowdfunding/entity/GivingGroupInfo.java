package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.GivingGroupInfoRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GivingGroupInfo {
	private int centerId;
	private String centerName;
	private String centerAddress;
	private int centerPhoneNumber;
	private String centerCeo;
	
	private Giving giving;

	public GivingGroupInfoRespDto givingGroupInfo() {
		return GivingGroupInfoRespDto.builder()
				.centerId(centerId)
				.centerName(centerName)
				.centerAddress(centerAddress)
				.centerCeo(centerCeo)
				.givingTotal(giving.getGivingTotal())
				.pageId(giving.getPageId())
				.build();
	}
}
