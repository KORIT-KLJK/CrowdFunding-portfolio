package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.resp.MainCardItemFundingRespDto;
import com.webproject.crowdfunding.dto.resp.MainCardItemGivingRespDto;
import com.webproject.crowdfunding.dto.resp.MainStatisticsRespDto;
import com.webproject.crowdfunding.repository.MainRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainService {
	
	private final MainRepository mainRepository;
	
	public Map<String, Object> toSaveCardItemFunding() {
		List<MainCardItemFundingRespDto> cardFundingList = new ArrayList<>();
		
		mainRepository.saveCardItemFunding().forEach(mainCardItemFunding -> {
			cardFundingList.add(mainCardItemFunding.toSaveMainCardFundingRespDto());
		});
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("cardFundingList", cardFundingList);
		return responseMap;
	}
	
	public Map<String, Object> toSaveCardItemGiving() {
		List<MainCardItemGivingRespDto> cardGivingList = new ArrayList<>();
		
		mainRepository.saveCardItemGiving(null).forEach(mainCardItemGiving -> {
			cardGivingList.add(mainCardItemGiving.toSaveMainCardGivingRespDto());
		});
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("cardGivingList", cardGivingList);
		return responseMap;
		
	}
	
	public MainStatisticsRespDto giver() {
		return mainRepository.getGivingTotal().toGiverEntity();
	}
	
	public MainStatisticsRespDto funder() {
		return mainRepository.getFundingTotal().toFunderEntity();
	}

}











