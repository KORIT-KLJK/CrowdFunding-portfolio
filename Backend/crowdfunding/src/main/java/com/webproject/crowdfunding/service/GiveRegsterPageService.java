package com.webproject.crowdfunding.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.RegisterPageReqDto;
import com.webproject.crowdfunding.entity.Center;
import com.webproject.crowdfunding.entity.DonationUsePlan;
import com.webproject.crowdfunding.entity.GiveRegisterPage;
import com.webproject.crowdfunding.entity.TargetBenefit;
import com.webproject.crowdfunding.repository.GiveRegisterPageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GiveRegsterPageService {
	
	private final GiveRegisterPageRepository giveRegisterPageRepository;
	private Center centerEntity;
	private GiveRegisterPage giveRegisterPageEntity;
	
	
	public void giveRegisterPage (RegisterPageReqDto registerPageReqDto) {
		centerEntity = registerPageReqDto.toCenterEntity();
		System.out.println(centerEntity);
		giveRegisterPageRepository.toSaveCenter(centerEntity);
		
		giveRegisterPageEntity = registerPageReqDto.toGiveRegisterEntity();
		giveRegisterPageEntity.setCenterId(centerEntity.getCenterId());
		giveRegisterPageRepository.toSaveGiveRegisterPage(giveRegisterPageEntity);
		
		List<DonationUsePlan> donationEntity = registerPageReqDto.toDonationUsePlanEntity();
		System.out.println(donationEntity);
		TargetBenefit targetBenefitEntity = registerPageReqDto.toTargetBenefitEntity();
		targetBenefitEntity.setGivingPageId(giveRegisterPageEntity.getGivingPageId());
		donationEntity.forEach(donation -> {
			giveRegisterPageRepository.toSaveDonation(
			DonationUsePlan.builder()
			.pageCategory(donation.getPageCategory())
			.giveUsing(donation.getGiveUsing())
			.donationExpense(donation.getDonationExpense())
			.givingPageId(giveRegisterPageEntity.getGivingPageId())
			.build());
		});
		giveRegisterPageRepository.toSaveTarget(targetBenefitEntity);
	}

}
