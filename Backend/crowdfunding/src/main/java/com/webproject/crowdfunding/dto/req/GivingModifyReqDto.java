package com.webproject.crowdfunding.dto.req;

import java.time.LocalDate;

import com.webproject.crowdfunding.entity.Giving;

import lombok.Data;

@Data
public class GivingModifyReqDto {
	private int givingPageId;
	private String givingName;
	private LocalDate endDate;
	private int goalTotal;
	
	public Giving givingModifyToEntity() {
		return Giving.builder()
				.pageId(givingPageId)
				.pageTitle(givingName)
				.endDate(endDate)
				.goalTotal(goalTotal)
				.build();
	}
}
