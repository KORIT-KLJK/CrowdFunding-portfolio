package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.SearchFundingReqDto;
import com.webproject.crowdfunding.dto.resp.FundingCategoryRespDto;
import com.webproject.crowdfunding.dto.resp.FundingMainRespDto;
import com.webproject.crowdfunding.repository.FundingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundingService {
	private final FundingRepository fundingRepository;
	
	public Map<String, Object> toSaveFunding(SearchFundingReqDto searchFundingReqDto) {
		List<FundingMainRespDto> fundingList = new ArrayList<>();
		int index = (searchFundingReqDto.getPage() - 1) * 20;
		Map<String, Object> map = new HashMap<>();
		map.put("index", index);
		map.put("searchStatus", searchFundingReqDto.getSearchStatus());
		map.put("searchCategory", searchFundingReqDto.getSearchCategory());
		
		fundingRepository.saveFunding(map).forEach(funding -> {
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
	
}









