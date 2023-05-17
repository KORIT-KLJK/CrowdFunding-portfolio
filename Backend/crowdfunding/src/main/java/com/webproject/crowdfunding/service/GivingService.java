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
	
	public List<GivingMainRespDto> toSaveGiving(SearchGivingReqDto searchGivingReqDto) {
		System.out.println(searchGivingReqDto);
		List<GivingMainRespDto> givingList = new ArrayList<>();
		int index = (searchGivingReqDto.getPage() - 1) * 20;
		Map<String, Object> map = new HashMap<>();
		map.put("index", index);
		map.put("selectedOrder", searchGivingReqDto.getSelectedOrder());
		map.put("categoryId", searchGivingReqDto.getCategoryId());
		
		givingRepository.getGivings(map).forEach(giving -> {
			givingList.add(giving.toMainRespDto());
		});
		
		return givingList;
	}
	
	public List<GivingCategoryRespDto> givingCategory() {
		List<GivingCategoryRespDto> givingCategorys = new ArrayList<>();
		
		givingRepository.getGivingCategory().forEach(givingCategory -> {
			givingCategorys.add(givingCategory.givingCategoryToDto());
		});
		return givingCategorys;
	}
	
	
}
