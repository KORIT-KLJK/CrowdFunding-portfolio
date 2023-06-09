package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.FundingEventReqDto;
import com.webproject.crowdfunding.dto.resp.FundingCategoryRespDto;
import com.webproject.crowdfunding.dto.resp.FundingMainRespDto;
import com.webproject.crowdfunding.repository.FundingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundingService {
	private final FundingRepository fundingRepository;
	
	public Map<String, Object> toSaveFunding(FundingEventReqDto fundingEventReqDto) {
		List<FundingMainRespDto> fundingList = new ArrayList<>();

		int index = fundingEventReqDto.getPage() * 20;
		Map<String, Object> eventStatusMap = new HashMap<>();
		eventStatusMap.put("index", index);
		eventStatusMap.put("fundingSortingReward", fundingEventReqDto.getFundingSortingReward());
		eventStatusMap.put("fundingSortingStatus", fundingEventReqDto.getFundingSortingStatus());
		
		fundingRepository.saveFunding(eventStatusMap).forEach(funding -> {
			fundingList.add(funding.toSaveFunding());
		});
		
		int totalCount = fundingRepository.getTotalCount(eventStatusMap);
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("totalCount", totalCount);
		responseMap.put("fundingList", fundingList);
		return responseMap;
	}
	
	public List<FundingCategoryRespDto> fundingCategory() {
		List<FundingCategoryRespDto> fundingCategorys = new ArrayList<>();
		
		fundingRepository.getFundingCategory().forEach(fundingCategory -> {
			fundingCategorys.add(fundingCategory.fundingCategoryToDto());
		});
		return fundingCategorys;
	}
	
	
}









