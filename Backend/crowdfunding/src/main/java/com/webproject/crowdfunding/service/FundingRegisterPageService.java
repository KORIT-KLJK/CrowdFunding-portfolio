package com.webproject.crowdfunding.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.FundingRegisterPageReqDto;
import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.FundingRegisterPage;
import com.webproject.crowdfunding.entity.FundingSubImg;
import com.webproject.crowdfunding.entity.Reward;
import com.webproject.crowdfunding.repository.FundingRegisterPageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundingRegisterPageService {

	private final FundingRegisterPageRepository registerPageRepository;
	private FundingRegisterPage fundingRegisterEntity;
	
	@Value("${file.path}")
	private String filePath;
	
	
	public int registerPage(FundingRegisterPageReqDto registerPageReqDto) {
		fundingRegisterEntity = registerPageReqDto.toRegisterEntity(filePath);
		registerPageRepository.toSaveRegisterPage(fundingRegisterEntity);
		
		BusinessInfo businessInfoEntity = registerPageReqDto.toBusinessEntity();
		businessInfoEntity.setFundingId(fundingRegisterEntity.getFundingId());
		registerPageRepository.toSaveBusinessInfo(businessInfoEntity);
		
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
		
		FundingSubImg fundingSubImgEntity = registerPageReqDto.toFundingSubImgEntity(filePath);
		fundingSubImgEntity.setFundingId(fundingRegisterEntity.getFundingId());
		return registerPageRepository.toSaveFundingSubImg(fundingSubImgEntity);
	}
}
