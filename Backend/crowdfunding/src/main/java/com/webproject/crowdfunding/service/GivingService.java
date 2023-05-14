package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.SearchGivingReqDto;
import com.webproject.crowdfunding.dto.resp.GivingCategoryRespDto;
import com.webproject.crowdfunding.dto.resp.GivingMainRespDto;
import com.webproject.crowdfunding.repository.GivingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GivingService {
	private final GivingRepository givingRepository;
	
	public Map<String, Object> toSaveGiving(SearchGivingReqDto searchGivingReqDto) {
		List<GivingMainRespDto> givingList = new ArrayList<>();
		int index = (searchGivingReqDto.getPage() - 1) * 20;
		Map<String, Object> map = new HashMap<>();
		map.put("index", index);
		map.put("searchStatus", searchGivingReqDto.getSearchStatus());
		map.put("searchCategory", searchGivingReqDto.getSearchCategory());
		
		givingRepository.saveGiving(map).forEach(giving -> {
			givingList.add(giving.toSaveGiving());
		});
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("givingList", givingList);
		System.out.println(responseMap);
		return responseMap;
	}
	
	public List<GivingCategoryRespDto> givingCategory() {
		List<GivingCategoryRespDto> givingCategorys = new ArrayList<>();
		
		givingRepository.getGivingCategory().forEach(givingCategory -> {
			givingCategorys.add(givingCategory.givingCategoryToDto());
		});
		return givingCategorys;
	}
	
	
}
