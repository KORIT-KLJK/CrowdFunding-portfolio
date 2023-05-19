package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import com.webproject.crowdfunding.dto.resp.GivingDetailRespDto;
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
	private String storyTitle;
	private String eventStatus;
	private String imgUrl;
	private String content;
	private int givingExpense;
	private String centerName;
	private int categoryId;
	private int amountCollected;
	private int achievementRate;
	private int givingCount;
	private LocalDate givingDate;
	private LocalDate registerDate;
	private LocalDate endDate;
	private int todayGivers;
	private int todayDonations;
	private String storyContent;
	
	private GivingCategory givingCategory;

	public GivingMainRespDto toMainRespDto() {
		return GivingMainRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.givingTotal(givingTotal)
				.goalTotal(goalTotal)
				.imgUrl(imgUrl)
				.eventStatus(eventStatus)
				.givingCategoryId(givingCategory.getGivingCategoryId())
				.givingCategoryName(givingCategory.getGivingCategoryName())
				.centerName(centerName)
				.amountCollected(amountCollected)
				.achievementRate(achievementRate)
				.givingCategoryId(givingCount)
				.givingDate(givingDate)
				.todayGivers(todayGivers)
				.todayDonations(todayDonations)
				.build();
	}
	public GivingDetailRespDto givingDetail() {
		return GivingDetailRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.imgUrl(imgUrl)
				.achievementRate(achievementRate)
				.registerDate(registerDate)
				.endDate(endDate)
				.givingTotal(givingTotal)
				.storyTitle(storyTitle)
				.storyContent(storyContent)
				.build();
				
				
	}
	
}


