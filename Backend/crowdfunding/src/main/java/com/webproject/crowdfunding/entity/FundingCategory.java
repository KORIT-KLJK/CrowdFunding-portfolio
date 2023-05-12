package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.FundingCategoryRespDto;

import lombok.Data;

@Data
public class FundingCategory {
	private int fundingCategoryId;
	private String categoryName;
	
	public FundingCategoryRespDto fundingCategoryToDto() {
		return FundingCategoryRespDto.builder()
				.fundingCategoryId(fundingCategoryId)
				.categoryName(categoryName)
				.build();
	}
}
