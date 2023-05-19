package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.resp.MainCardItemFundingRespDto;
import com.webproject.crowdfunding.repository.MainCardItemFundingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainCardItemFundingService {
	private final MainCardItemFundingRepository mainCardItemFundingRepository;
	
	public Map<String, Object> toSaveCardItemFunding() {
		List<MainCardItemFundingRespDto> cardFundingList = new ArrayList<>();
		
		mainCardItemFundingRepository.saveCardItemFunding(null).forEach(mainCardItemFunding -> {
			cardFundingList.add(mainCardItemFunding.toSaveMainCardFundingRespDto());
		});
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("cardFundingList", cardFundingList);
		System.out.println(responseMap);
		return responseMap;
	}
	
	
}
