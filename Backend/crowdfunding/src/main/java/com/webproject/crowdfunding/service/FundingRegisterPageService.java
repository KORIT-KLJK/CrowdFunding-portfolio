package com.webproject.crowdfunding.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.webproject.crowdfunding.dto.req.RegisterPageReqDto;
import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.FundingRegisterPage;
import com.webproject.crowdfunding.entity.PostsImg;
import com.webproject.crowdfunding.entity.Reward;
import com.webproject.crowdfunding.repository.FundingRegisterPageRepository;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundingRegisterPageService {

	private final FundingRegisterPageRepository registerPageRepository;
	private FundingRegisterPage fundingRegisterEntity;
	
	
	public void registerPage(RegisterPageReqDto registerPageReqDto) {
		fundingRegisterEntity = registerPageReqDto.toRegisterEntity();
		System.out.println(fundingRegisterEntity);
		registerPageRepository.toSaveRegisterPage(fundingRegisterEntity);
		BusinessInfo businessInfoEntity = registerPageReqDto.toBusinessEntity();
		List<Reward> rewardEntity = registerPageReqDto.toRewardEntity();
		
		businessInfoEntity.setFundingId(fundingRegisterEntity.getFundingId());
		registerPageRepository.toSaveBusinessInfo(businessInfoEntity);
		
		
		rewardEntity.forEach(reward -> {
			registerPageRepository.toSaveReward(
					Reward.builder()
					.pageCategory(reward.getPageCategory())
					.rewardName(reward.getRewardName())
					.rewardPrice(reward.getRewardPrice())
					.fundingId(fundingRegisterEntity.getFundingId())
					.build());
		});
		
		System.out.println(fundingRegisterEntity.getFundingId());
	}
	

	
}
