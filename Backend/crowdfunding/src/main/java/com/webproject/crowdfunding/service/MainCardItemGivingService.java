package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.resp.MainCardItemGivingRespDto;
import com.webproject.crowdfunding.repository.GivingRepository;
import com.webproject.crowdfunding.repository.MainCardItemGivingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainCardItemGivingService {
	private final MainCardItemGivingRepository mainCardItemGivingRepository;
	
	public Map<String, Object> toSaveCardItemGiving() {
		List<MainCardItemGivingRespDto> cardGivingList = new ArrayList<>();
		
		mainCardItemGivingRepository.saveCardItemGiving(null).forEach(mainCardItemGiving -> {
			cardGivingList.add(mainCardItemGiving.toSaveMainCardGivingRespDto());
		});
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("cardGivingList", cardGivingList);
		System.out.println(responseMap);
		return responseMap;
		
	}
	
}
