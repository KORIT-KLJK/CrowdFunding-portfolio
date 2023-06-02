package com.webproject.crowdfunding.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.FundingRegisterPageReqDto;
import com.webproject.crowdfunding.dto.req.GivingRegisterReqDto;
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
	
	public int giveRegisterPage (GivingRegisterReqDto givingRegisterReqDto) {
		centerEntity = givingRegisterReqDto.toCenterEntity();
		giveRegisterPageRepository.toSaveCenter(centerEntity);
		
		giveRegisterPageEntity = givingRegisterReqDto.toGiveRegisterEntity(filePath);
		giveRegisterPageEntity.setCenterId(centerEntity.getCenterId());
		giveRegisterPageRepository.toSaveGiveRegisterPage(giveRegisterPageEntity);
		
		TargetBenefit targetBenefitEntity = givingRegisterReqDto.toTargetBenefitEntity();
		targetBenefitEntity.setGivingPageId(giveRegisterPageEntity.getGivingPageId());
		giveRegisterPageRepository.toSaveTarget(targetBenefitEntity);
		
		List<DonationUsePlan> donationEntity = givingRegisterReqDto.toDonationUsePlanEntity();
		donationEntity.forEach(donation -> {
			giveRegisterPageRepository.toSaveDonation(
			DonationUsePlan.builder()
			.pageCategory(donation.getPageCategory())
			.giveUsing(donation.getGiveUsing())
			.donationExpense(donation.getDonationExpense())
			.givingPageId(giveRegisterPageEntity.getGivingPageId())
			.build());
		});
		
		GivingSubImg givingSubImgEntity = givingRegisterReqDto.togivingSubImgEntity(filePath);
		givingSubImgEntity.setGivingPageId(giveRegisterPageEntity.getGivingPageId());
		return giveRegisterPageRepository.toSaveGivingSubImg(givingSubImgEntity);
	}

}
