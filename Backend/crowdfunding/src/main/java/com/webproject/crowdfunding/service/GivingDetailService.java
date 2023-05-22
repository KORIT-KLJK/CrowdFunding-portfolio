package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.resp.GivingDetailRespDto;
import com.webproject.crowdfunding.dto.resp.GivingMainRespDto;
import com.webproject.crowdfunding.repository.GivingDetailRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GivingDetailService {
	private final GivingDetailRepository givingDetailRepository;
	
	public GivingDetailRespDto givingDetail(int pageId) {
		return givingDetailRepository.getGivingDetail(pageId).givingDetail();
	}
	
	public List<GivingDetailRespDto> getMostGivings(int pageId) {
		List<GivingDetailRespDto> givingDetailRespDtos = new ArrayList<>();
		
		givingDetailRepository.getMostGivings(pageId).forEach(giving -> {
			givingDetailRespDtos.add(giving.toMostGiving());
		});;
		
		return givingDetailRespDtos;
	}
	
		
}
