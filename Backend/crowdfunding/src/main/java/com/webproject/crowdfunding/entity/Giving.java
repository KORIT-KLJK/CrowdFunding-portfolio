package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import com.webproject.crowdfunding.dto.resp.GivingDetailRespDto;
import com.webproject.crowdfunding.dto.resp.GivingDonationUsePlanRespDto;
import com.webproject.crowdfunding.dto.resp.GivingMainRespDto;
import com.webproject.crowdfunding.dto.resp.GivingParticipationDetailsRespDto;
import com.webproject.crowdfunding.dto.resp.GivingTargetBenefitRespDto;

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
	private String storyContent;
	private String eventStatus;
	private String imgUrl;
	private String subImgUrl;
	private int givingExpense;
	private String centerName;
	private int categoryId;
	private int amountCollected;
	private int achievementRate;
	private int givingCount;
	private LocalDate givingDate;
	private LocalDate registerDate;
	private LocalDate endDate;
	private String dDay;
	private int todayGivers;
	private int todayDonations;
	private int userId;
	private String username;
	private String content;
	private int donationExpense;
	private String target;
	private int targetCount;
	private String benefitEffect;
	
	private GivingCategory givingCategory;
	private GivingGroupInfo givingGroupInfo;

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
				.dDay(dDay)
				.todayGivers(todayGivers)
				.todayDonations(todayDonations)
				.build();
	}
	public GivingDetailRespDto givingDetail() {
		return GivingDetailRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.imgUrl(imgUrl)
				.subImgUrl(subImgUrl)
				.achievementRate(achievementRate)
				.registerDate(registerDate)
				.endDate(endDate)
				.dDay(dDay)
				.givingTotal(givingTotal)
				.storyTitle(storyTitle)
				.storyContent(storyContent)
				.centerId(givingGroupInfo.getCenterId())
				.centerName(givingGroupInfo.getCenterName())
				.centerAddress(givingGroupInfo.getCenterAddress())
				.centerPhoneNumber(givingGroupInfo.getCenterPhoneNumber())
				.centerCEO(givingGroupInfo.getCenterCEO())
				.build();
	}
	
	public GivingDetailRespDto toMostGiving() {
		return GivingDetailRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.imgUrl(imgUrl)
				.build();
	}
	
	public GivingParticipationDetailsRespDto toParticipationDetails() {
		return GivingParticipationDetailsRespDto.builder()
				.pageId(pageId)
				.userId(userId)
				.username(username)
				.givingTotal(givingTotal)
				.givingDate(givingDate)
				.build();
	}
	
	public GivingDonationUsePlanRespDto toDonationUsePlan() {
		return GivingDonationUsePlanRespDto.builder()
				.content(content)
				.donationExpense(donationExpense)
				.pageId(pageId)
				.goalTotal(goalTotal)
				.build();
	}
	
	public GivingTargetBenefitRespDto toTargetBenefit() {
		return GivingTargetBenefitRespDto.builder()
				.target(target)
				.targetCount(targetCount)
				.benefitEffect(benefitEffect)
				.pageId(pageId)
				.registerDate(registerDate)
				.endDate(endDate)
				.build();
	}
	
	
	
}


