package com.webproject.crowdfunding.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.RegisterPageReqDto;
import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.FundingRegisterPage;
import com.webproject.crowdfunding.entity.Reward;
import com.webproject.crowdfunding.repository.FundingRegisterPageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundingRegisterPageService {
	
	private final FundingRegisterPageRepository registerPageRepository;
	private FundingRegisterPage fundingRegisterEntity;
	
	public void registerPage(RegisterPageReqDto registerPageReqDto) {
		fundingRegisterEntity = registerPageReqDto.toRegisterEntity();
		registerPageRepository.toSaveRegisterPage(fundingRegisterEntity);
	}
	
	public void registerBusinessInfo(RegisterPageReqDto registerPageReqDto) {
		BusinessInfo businessInfoEntity = registerPageReqDto.toBusinessEntity();
		businessInfoEntity.setFundingId(fundingRegisterEntity.getFundingId());
		registerPageRepository.toSaveBusinessInfo(businessInfoEntity);
	}
	
	public void registerReward(RegisterPageReqDto registerPageReqDto) {
		List<Reward> rewardEntity = registerPageReqDto.toRewardEntity();
		rewardEntity.forEach(reward -> {
			registerPageRepository.toSaveReward(
			Reward.builder()
			.pageCategory(reward.getPageCategory())
			.rewardName(reward.getRewardName())
			.rewardPrice(reward.getRewardPrice())
			.fundingId(fundingRegisterEntity.getFundingId())
			.build());
		});
	}
	
}
