package com.webproject.crowdfunding.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.FundingDeleteReqDto;
import com.webproject.crowdfunding.dto.req.FundingModifyReqDto;
import com.webproject.crowdfunding.dto.req.GivingModifyReqDto;
import com.webproject.crowdfunding.entity.Funding;
import com.webproject.crowdfunding.entity.Giving;
import com.webproject.crowdfunding.entity.Reward;
import com.webproject.crowdfunding.repository.AdminRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {

	private final AdminRepository adminRepository;
	
	public int fundingModify(FundingModifyReqDto fundingModifyReqDto) {
		Funding fundingToEntity = fundingModifyReqDto.fundingToEntity();
		return adminRepository.saveFundingModify(fundingToEntity);
	}
	
	public int fundingDelete(FundingDeleteReqDto fundingDeleteReqDto) {
		Funding fundingEntity = fundingDeleteReqDto.deleteFundingIdToEntity();
		List<Reward> rewards = fundingDeleteReqDto.deleteRewardIdToEntity();
		adminRepository.saveDeleteRewardId(rewards);
		return adminRepository.saveDeleteFundingId(fundingEntity);
	}
	
	public int givingModify(GivingModifyReqDto givingModifyReqDto) {
		Giving givingEntity = givingModifyReqDto.givingModifyToEntity();
		
		return adminRepository.saveGivingModify(givingEntity);
	}
	
	public int givingDelete(int pageId) {
		adminRepository.saveDeleteGivingDonationUsePlan(pageId);
		adminRepository.saveDeleteGivingTargetBenefit(pageId);
		return adminRepository.saveGivingDelete(pageId);
	}
	
	
}
