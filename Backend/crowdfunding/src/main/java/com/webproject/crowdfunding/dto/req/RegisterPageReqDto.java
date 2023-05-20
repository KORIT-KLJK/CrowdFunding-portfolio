package com.webproject.crowdfunding.dto.req;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.Center;
import com.webproject.crowdfunding.entity.DonationUsePlan;
import com.webproject.crowdfunding.entity.FundingRegisterPage;
import com.webproject.crowdfunding.entity.GiveRegisterPage;
import com.webproject.crowdfunding.entity.Reward;
import com.webproject.crowdfunding.entity.TargetBenefit;

import lombok.Data;

@Data
public class RegisterPageReqDto {
	private String pageCategory;
	private String detailCategory;
	private String title;
	private String storyTitle;
	private String story;
	private String imgUrl;
	private int goalTotal;
	private LocalDate endDate;
	private List<String> giveUsing;
	private List<Integer> donationExpense;
	private LocalDate businessStartDate;
	private LocalDate businessEndDate;
	private String target;
	private int targetCount;
	private String benefitEffect;
	private List<String> rewardName;
	private List<Integer> rewardPrice;
	private String companyName;
	private String ceoName;
	private String nickname;
	private String companyAddress;
	private String companyPhoneNumber;
	private String email;
	
	public FundingRegisterPage toRegisterEntity() {
		return FundingRegisterPage.builder()
				.pageCategory(pageCategory)
				.detailCategory(detailCategory)
				.title(title)
				.storyTitle(storyTitle)
				.story(story)
				.imgUrl(imgUrl)
				.goalTotal(goalTotal)
				.endDate(endDate)
				.nickname(nickname)
				.build();
	}
	
	public GiveRegisterPage toGiveRegisterEntity() {
		return GiveRegisterPage.builder()
				.pageCategory(pageCategory)
				.detailCategory(detailCategory)
				.title(title)
				.storyTitle(storyTitle)
				.story(story)
				.imgUrl(imgUrl)
				.goalTotal(goalTotal)
				.endDate(endDate)
				.nickname(nickname)
				.build();
	}
	
	public Center toCenterEntity() {
		return Center.builder()
				.pageCategory(pageCategory)
				.centerName(companyName)
				.centerAddress(companyAddress)
				.centerPhoneNumber(companyPhoneNumber)
				.build();
	}
	
	public TargetBenefit toTargetBenefitEntity() {
		return TargetBenefit.builder()
				.pageCategory(pageCategory)
				.target(target)
				.targetCount(targetCount)
				.benefitEffect(benefitEffect)
				.businessStartDate(businessStartDate)
				.businessEndDate(businessEndDate)
				.build();
	}
	
	public List<DonationUsePlan> toDonationUsePlanEntity() {
	    List<DonationUsePlan> donationUsePlans = new ArrayList<>();
	    for (int i = 0; i < giveUsing.size(); i++) {
	        String give = giveUsing.get(i);
	        int donation = donationExpense.get(i);
	        DonationUsePlan donationPlan = DonationUsePlan.builder()
	        		.pageCategory(pageCategory)
	        		.giveUsing(give)
	        		.donationExpense(donation)
	        		.build();
	        donationUsePlans.add(donationPlan);
	    }
	    System.out.println(donationUsePlans);
	    return donationUsePlans;
	}
	
	public BusinessInfo toBusinessEntity() {
		return BusinessInfo.builder()
				.pageCategory(pageCategory)
				.companyName(companyName)
				.ceoName(ceoName)
				.companyAddress(companyAddress)
				.companyPhoneNumber(companyPhoneNumber)
				.ceoEmail(email)
				.build();
	}
	

	public List<Reward> toRewardEntity() {
	    List<Reward> rewards = new ArrayList<>();
	    for (int i = 0; i < rewardName.size(); i++) {
	        String name = rewardName.get(i);
	        int price = rewardPrice.get(i);
	        Reward reward = Reward.builder()
	        		.pageCategory(pageCategory)
	        		.rewardName(name)
	        		.rewardPrice(price)
	        		.build();
	        rewards.add(reward);
	    }
 
	    return rewards;
	}
	
}











