package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.BreakdownRespDto;
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
	private int userId;
	private String fundingTitle;
	private String fundingSummaryName;
	private String username;
	private int recentSort;
	private String nearDeadline;
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
				.fundingSummaryName(fundingSummaryName)
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
				.fundingSummaryName(fundingSummaryName)
				.fundingTitle(fundingTitle)
				.username(username)
				.deadline(nearDeadline)
				.goalTotal(goalTotal)
				.totalRewardPrice(totalRewardPrice)
				.storyTitle(storyTitle)
				.storyContent(storyContent)
				.imgUrl(imgUrl)
				.joinPercent(joinPercent)
				.build();
	}
	
	public BreakdownRespDto toBreakdown() {
		return BreakdownRespDto.builder()
				.fundingId(fundingId)
				.userId(userId)
				.username(username)
				.totalRewardPrice(totalRewardPrice)
				.build();
	}
	
}









