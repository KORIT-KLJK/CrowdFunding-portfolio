package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.GivingCategoryRespDto;

import lombok.Data;

@Data
public class GivingCategory {
	private int givingCategoryId;
	private String CategoryName;
	
	public GivingCategoryRespDto givingCategoryToDto() {
		return GivingCategoryRespDto.builder()
				.givingCategoryId(givingCategoryId)
				.categoryName(CategoryName)
				.build();
	}
}
