package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.GivingMainRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Giving {
	private int pageId;
	private String pageTitle;
	private int givingTotal;
	private int goalTotal;
	private String imgUrl;
	private String content;
	private int givingExpense;
	private String centerName;
	private int percent;
	private int givingCategoryId;
	private String categoryName;


	public GivingMainRespDto toSaveGiving() {
		return GivingMainRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.goalTotal(goalTotal)
				.imgUrl(imgUrl)
				.givingCategoryId(givingCategoryId)
				.centerName(centerName)
				.percent(percent)
				.build();
	}
}


