package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.FundingDetailRespDto;
import com.webproject.crowdfunding.dto.resp.FundingMainRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Funding {
	private int fundingId;
	private String fundingTitle;
	private String username;
	private int recentSort;
	private int nearDeadline;
	private String eventStatus;
	private int goalTotal;
	private int totalRewardPrice;
	private int joinPercent;
	private String imgUrl;
	private int fundingCategoryId;
	private String storyTitle;
	private String storyContent;
	
	public FundingMainRespDto toSaveFunding() {
		return FundingMainRespDto.builder()
				.pageId(fundingId)
				.pageTitle(fundingTitle)
				.username(username)
				.recentSort(recentSort)
				.nearDeadlineSort(nearDeadline)
				.eventStatus(eventStatus)
				.goalTotal(goalTotal)
				.totalRewardPrice(totalRewardPrice)
				.joinPercent(joinPercent)
				.imgUrl(imgUrl)
				.fundingCategoryId(fundingCategoryId)
				.build();
	}
	
	public FundingDetailRespDto getDetailFunding() {
		return FundingDetailRespDto.builder()
				.fundingId(fundingId)
				.fundingTitle(fundingTitle)
				.username(username)
				.nearDeadline(nearDeadline)
				.goalTotal(goalTotal)
				.totalRewardPrice(totalRewardPrice)
				.storyTitle(storyTitle)
				.storyContent(storyContent)
				.imgUrl(imgUrl)
				.joinPercent(joinPercent)
				.build();
	}
	
}









