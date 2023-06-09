package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.webproject.crowdfunding.dto.req.GiverPaymentReqDto;
import com.webproject.crowdfunding.dto.req.GivingModifyReqDto;
import com.webproject.crowdfunding.dto.resp.GivingDetailRespDto;
import com.webproject.crowdfunding.dto.resp.GivingDonationUsePlanRespDto;
import com.webproject.crowdfunding.dto.resp.GivingParticipationDetailsRespDto;
import com.webproject.crowdfunding.dto.resp.GivingTargetBenefitRespDto;
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
	
	public Map<String, Object> getParticipationDetails(int pageId) {
		List<GivingParticipationDetailsRespDto> participationDetailsList = new ArrayList<>();
		givingDetailRepository.getParticipationDetails(pageId).forEach(participationDetails -> {
			participationDetailsList.add(participationDetails.toParticipationDetails());
		});
		
		Map<String, Object> participationDetailsMap = new HashMap<>();
		participationDetailsMap.put("participationDetailsList", participationDetailsList);
		return participationDetailsMap;
	}
	
	public Map<String, Object> getDonationUsePlan(int pageId) {
		List<GivingDonationUsePlanRespDto> donationUsePlanList = new ArrayList<>();
		givingDetailRepository.getDonationUsePlan(pageId).forEach(donationUseplan -> {
			donationUsePlanList.add(donationUseplan.toDonationUsePlan());
		});

		Map<String, Object> donationUsePlanMap = new HashMap<>();
		donationUsePlanMap.put("donationUsePlanList", donationUsePlanList);
		
		return donationUsePlanMap;
	}

	public Map<String, Object> getTargetBenefit(int pageId) {
		List<GivingTargetBenefitRespDto> targetBenefitList = new ArrayList<>();
		givingDetailRepository.getTargetBenefit(pageId).forEach(targetBenefit -> {
			targetBenefitList.add(targetBenefit.toTargetBenefit());
		});
		
		Map<String, Object> targetBenefitMap = new HashMap<>();
		targetBenefitMap.put("targetBenefitList", targetBenefitList);
		
		return targetBenefitMap;
	}
	
}
