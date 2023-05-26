package com.webproject.crowdfunding.dto.req;

import java.time.LocalDate;

import com.webproject.crowdfunding.entity.Funding;

import lombok.Data;

@Data
public class FundingModifyReqDto {
	private int fundingId;
	private String fundingName;
	private LocalDate endDate;
	private int goalTotal;
	
	public Funding fundingToEntity() {
		return Funding.builder()
				.fundingId(fundingId)
				.fundingTitle(fundingName)
				.endDate(endDate)
				.goalTotal(goalTotal)
				.build();
	}
}
