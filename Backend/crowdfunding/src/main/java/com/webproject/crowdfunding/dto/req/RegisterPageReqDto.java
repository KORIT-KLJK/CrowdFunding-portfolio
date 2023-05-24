package com.webproject.crowdfunding.dto.req;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.Center;
import com.webproject.crowdfunding.entity.DonationUsePlan;
import com.webproject.crowdfunding.entity.FundingRegisterPage;
import com.webproject.crowdfunding.entity.GiveRegisterPage;
import com.webproject.crowdfunding.entity.Reward;
import com.webproject.crowdfunding.entity.TargetBenefit;
import com.webproject.crowdfunding.service.FundingRegisterPageService;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class RegisterPageReqDto {
	private String pageCategory;
	private String detailCategory;
	private String title;
	private String storyTitle;
	private String story;
	private MultipartFile imgUrl;
	private int goalTotal;
	private String endDate;
	private List<String> giveUsing;
	private List<Integer> donationExpense;
	private String businessStartDate;
	private String businessEndDate;
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
	@Value("${file.path}")
	private String filePath;
	
	public FundingRegisterPage toRegisterEntity() {
		MultipartFile file = imgUrl;
		if(file == null) {
			return null;
		}
		String originFileName = file.getOriginalFilename();
		String extension = originFileName.substring(originFileName.lastIndexOf("."));
		String tempFileName = UUID.randomUUID().toString().replaceAll("-", "") + extension;
		Path uploadPath = Paths.get(filePath + "post/" + tempFileName);	// 경로/post/UUID.jpg
		File f = new File(filePath + "post");
		if(!f.exists()) {
			f.mkdirs();
		}
		
		try {
			Files.write(uploadPath, file.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return FundingRegisterPage.builder()
				.pageCategory(pageCategory)
				.detailCategory(detailCategory)
				.title(title)
				.storyTitle(storyTitle)
				.story(story)
				.goalTotal(goalTotal)
				.imgUrl(tempFileName)
				.endDate(endDate)
				.nickname(nickname)
				.build();
	}
	
	public GiveRegisterPage toGiveRegisterEntity() {
		MultipartFile file = imgUrl;
		if(file == null) {
			return null;
		}
		String originFileName = file.getOriginalFilename();
		String extension = originFileName.substring(originFileName.lastIndexOf("."));
		String tempFileName = UUID.randomUUID().toString().replaceAll("-", "") + extension;
		Path uploadPath = Paths.get(filePath + "post/" + tempFileName);	// 경로/post/UUID.jpg
		File f = new File(filePath + "post");
		if(!f.exists()) {
			f.mkdirs();
		}
		
		try {
			Files.write(uploadPath, file.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return GiveRegisterPage.builder()
				.pageCategory(pageCategory)
				.detailCategory(detailCategory)
				.title(title)
				.storyTitle(storyTitle)
				.story(story)
				.goalTotal(goalTotal)
				.imgUrl(tempFileName)
				.endDate(endDate)
				.build();
	}
	
	public Center toCenterEntity() {
		return Center.builder()
				.pageCategory(pageCategory)
				.centerName(companyName)
				.centerAddress(companyAddress)
				.centerPhoneNumber(companyPhoneNumber)
				.centerCeo(ceoName)	
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











