package com.webproject.crowdfunding.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.RegisterPageReqDto;
import com.webproject.crowdfunding.entity.Center;
import com.webproject.crowdfunding.entity.DonationUsePlan;
import com.webproject.crowdfunding.entity.GiveRegisterPage;
import com.webproject.crowdfunding.entity.GivingSubImg;
import com.webproject.crowdfunding.entity.TargetBenefit;
import com.webproject.crowdfunding.repository.GiveRegisterPageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GiveRegsterPageService {
	
	private final GiveRegisterPageRepository giveRegisterPageRepository;
	private Center centerEntity;
	private GiveRegisterPage giveRegisterPageEntity;
	
	@Value("${file.path}")
	private String filePath;
	
	public void giveRegisterPage (RegisterPageReqDto registerPageReqDto) {
		centerEntity = registerPageReqDto.toCenterEntity();
		giveRegisterPageRepository.toSaveCenter(centerEntity);
		
		giveRegisterPageEntity = registerPageReqDto.toGiveRegisterEntity(filePath);
		giveRegisterPageEntity.setCenterId(centerEntity.getCenterId());
		giveRegisterPageRepository.toSaveGiveRegisterPage(giveRegisterPageEntity);
		
		TargetBenefit targetBenefitEntity = registerPageReqDto.toTargetBenefitEntity();
		targetBenefitEntity.setGivingPageId(giveRegisterPageEntity.getGivingPageId());
		giveRegisterPageRepository.toSaveTarget(targetBenefitEntity);
		
		List<DonationUsePlan> donationEntity = registerPageReqDto.toDonationUsePlanEntity();
		donationEntity.forEach(donation -> {
			giveRegisterPageRepository.toSaveDonation(
			DonationUsePlan.builder()
			.pageCategory(donation.getPageCategory())
			.giveUsing(donation.getGiveUsing())
			.donationExpense(donation.getDonationExpense())
			.givingPageId(giveRegisterPageEntity.getGivingPageId())
			.build());
		});
		
		GivingSubImg givingSubImgEntity = registerPageReqDto.togivingSubImgEntity(filePath);
		givingSubImgEntity.setGivingPageId(giveRegisterPageEntity.getGivingPageId());
		giveRegisterPageRepository.toSaveGivingSubImg(givingSubImgEntity);
	}

}
