package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

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
	private int pageId;
	private String pageTitle;
	private String username;
	private String eventStatus;
	private LocalDate registerDate;
	private LocalDate endDate;
	private String totalRewardPrice;
	private int goalTotal;
	private String storyTitle;
	private String storyContent;
	private String imgUrl;
	private int userId;
	private int rewardId;
	private String rewardName;
	private int fundingCategoryId;
	private int recentSort;
	private int nearDeadlineSort;
	
	public FundingMainRespDto toSaveFunding() {
		return FundingMainRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.username(username)
				.eventStatus(eventStatus)
				.goalTotal(goalTotal)
				.totalRewardPrice(totalRewardPrice)
				.imgUrl(imgUrl)
				.fundingCategoryId(fundingCategoryId)
				.recentSort(recentSort)
				.nearDeadlineSort(nearDeadlineSort)
				.build();
	}
	
}
