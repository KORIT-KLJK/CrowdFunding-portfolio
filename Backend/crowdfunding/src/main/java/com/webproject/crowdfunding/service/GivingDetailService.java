package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.GivingModifyReqDto;
import com.webproject.crowdfunding.dto.resp.GivingDetailRespDto;
import com.webproject.crowdfunding.dto.resp.GivingMainRespDto;
import com.webproject.crowdfunding.dto.resp.GivingParticipationDetailsRespDto;
import com.webproject.crowdfunding.entity.Giving;
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
	
	public int givingModify(GivingModifyReqDto givingModifyReqDto) {
		Giving givingEntity = givingModifyReqDto.givingModifyToEntity();
		
		return givingDetailRepository.saveGivingModify(givingEntity);
	}
	
	public int givingDelete(int pageId) {
		return givingDetailRepository.saveGivingDelete(pageId);
	}
	
	public Map<String, Object> getParticipationDetails(int pageId) {
		List<GivingParticipationDetailsRespDto> participationDetailsList = new ArrayList<>();
		givingDetailRepository.getParticipationDetails(pageId).forEach(participationDetails -> {
			participationDetailsList.add(participationDetails.toParticipationDetails());
		});
		
		Map<String, Object> participationDetailsMap = new HashMap<>();
		participationDetailsMap.put("participationDetailsList", participationDetailsList);
		
		return participationDetailsMap;
	}
		
}
