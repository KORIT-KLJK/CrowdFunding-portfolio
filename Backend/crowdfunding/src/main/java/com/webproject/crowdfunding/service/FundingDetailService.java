package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.FunderReqDto;
import com.webproject.crowdfunding.dto.resp.BreakdownRespDto;
import com.webproject.crowdfunding.dto.resp.BusinessInfoRespDto;
import com.webproject.crowdfunding.dto.resp.FundingDetailRespDto;
import com.webproject.crowdfunding.dto.resp.RewardRespDto;
import com.webproject.crowdfunding.entity.Address;
import com.webproject.crowdfunding.entity.Funder;
import com.webproject.crowdfunding.repository.FundingDetailRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundingDetailService {

	private final FundingDetailRepository fundingDetailRepository;
	
	public FundingDetailRespDto fundingDetail(int pageId) {
		
		return fundingDetailRepository.fundingDetail(pageId).getDetailFunding();
	}
	
	public Map<String, Object> getReward(int pageId) {
		List<RewardRespDto> rewardList = new ArrayList<>();
		
		fundingDetailRepository.getReward(pageId).forEach(reward -> {
			rewardList.add(reward.getFundingReward());
		});
		
		Map<String, Object> rewardMap = new HashMap<>();
		rewardMap.put("rewardList", rewardList);
		
		return rewardMap;
	}
	
	public BusinessInfoRespDto getBusinessInfo(int pageId) {
		return fundingDetailRepository.getBusinessInfo(pageId).toBusinessInfo();
	}
	
	public Map<String, Object> getBreakdown(int pageId) {
		List<BreakdownRespDto> breakdownList = new ArrayList<>();
		fundingDetailRepository.getBreakdown(pageId).forEach(breakdown -> {
			breakdownList.add(breakdown.toBreakdown());
		});
		
		Map<String, Object> breakdownMap = new HashMap<>();
		breakdownMap.put("breakdownList", breakdownList);
		
		return breakdownMap;
	}
	
	public Address getAddressId(int userId) {
		System.out.println(userId);
		return fundingDetailRepository.getAddressId(userId);
	}
	
	public int saveFunder(FunderReqDto funderReqDto) {
		List<Funder> funderEntity = funderReqDto.toFunderEntity();
		funderEntity.forEach(funder -> {
			fundingDetailRepository.toSaveFunder(
					Funder.builder()
					.funderId(funder.getFunderId())
					.userId(funder.getUserId())
					.addressId(funder.getAddressId())
					.rewardId(funder.getRewardId())
					.build());
		});
		System.out.println(funderEntity);
		return 0;
	}
	
}
