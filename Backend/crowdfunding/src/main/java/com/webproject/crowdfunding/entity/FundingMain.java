package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.FundingMainRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FundingMain {
	private int pageId;
	private String pageTitle;
	private String username;
	private int recentSort;
	private int nearDeadlineSort;
	private String eventStatus;
	private int goalTotal;
	private int totalRewardPrice;
	private int joinPercent;
	private String imgUrl;
	private int fundingCategoryId;
	
	public FundingMainRespDto toSaveFunding() {
		return FundingMainRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.username(username)
				.recentSort(recentSort)
				.nearDeadlineSort(nearDeadlineSort)
				.eventStatus(eventStatus)
				.goalTotal(goalTotal)
				.totalRewardPrice(totalRewardPrice)
				.joinPercent(joinPercent)
				.imgUrl(imgUrl)
				.fundingCategoryId(fundingCategoryId)
				.build();
	}
	
}
