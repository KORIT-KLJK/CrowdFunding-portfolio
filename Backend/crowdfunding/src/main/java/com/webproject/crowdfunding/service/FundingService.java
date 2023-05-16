package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.FundingEventReqDto;
import com.webproject.crowdfunding.dto.req.SearchFundingReqDto;
import com.webproject.crowdfunding.dto.resp.FundingCategoryRespDto;
import com.webproject.crowdfunding.dto.resp.FundingMainRespDto;
import com.webproject.crowdfunding.repository.FundingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundingService {
	private final FundingRepository fundingRepository;
	
	public Map<String, Object> toSaveFunding() {
		List<FundingMainRespDto> fundingList = new ArrayList<>();
		fundingRepository.saveFunding().forEach(funding -> {
			fundingList.add(funding.toSaveFunding());
		});
		
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("fundingList", fundingList);
		System.out.println(responseMap);
		return responseMap;
	}
	
	public List<FundingCategoryRespDto> fundingCategory() {
		List<FundingCategoryRespDto> fundingCategorys = new ArrayList<>();
		
		fundingRepository.getFundingCategory().forEach(fundingCategory -> {
			fundingCategorys.add(fundingCategory.fundingCategoryToDto());
		});
		return fundingCategorys;
	}
	
	public Map<String, Object> fundingStatus(FundingEventReqDto fundingMainReqDto) {
		List<FundingMainRespDto> fundingList = new ArrayList<>();
		Map<String, Object> eventStatusMap = new HashMap<>();
		
		eventStatusMap.put("fundingList", fundingList);
		eventStatusMap.put("eventStatus", fundingMainReqDto.getEventStatus());
		
		fundingRepository.fundingStatus(eventStatusMap).forEach(funding -> {
			fundingList.add(funding.toSaveFunding());
		});
		System.out.println(eventStatusMap);
		System.out.println(eventStatusMap);
		return eventStatusMap;
	}
	
}









