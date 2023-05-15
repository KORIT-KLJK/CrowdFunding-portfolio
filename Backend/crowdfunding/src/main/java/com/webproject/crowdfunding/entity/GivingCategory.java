package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.GivingCategoryRespDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class GivingCategory {
	private int givingCategoryId;
	private String givingCategoryName;
	
	public GivingCategoryRespDto givingCategoryToDto() {
		return GivingCategoryRespDto.builder()
				.givingCategoryId(givingCategoryId)
				.givingCategoryName(givingCategoryName)
				.build();
	}
}
