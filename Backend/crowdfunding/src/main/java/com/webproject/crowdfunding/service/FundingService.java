package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.SearchFundingReqDto;
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
		//레파지토리의 list의 데이터를 forEach문으로 하나씩 돌려려서, toSaveFunding에 필요한것들을 담음.
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("fundingList", fundingList);
		System.out.println(responseMap);
		return responseMap;
		// toSaveFunding생성자에 있는 데이터를 fundingList에 있는 값을 삽입 key value값으로 변환시켜 반환해 responseMap을 반환/
	}
	
}
