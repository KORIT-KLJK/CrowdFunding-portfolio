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
		givingDetailRepository.saveGivingDonationUsePlan(pageId);
		givingDetailRepository.saveGivingTargetBenefit(pageId);
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
		List<GivingDonationUsePlanRespDto> targetBenefitList = new ArrayList<>();
		givingDetailRepository.getTargetBenefit(pageId).forEach(targetBenefit -> {
			targetBenefitList.add(targetBenefit.toDonationUsePlan());
		});
		
		Map<String, Object> targetBenefitMap = new HashMap<>();
		targetBenefitMap.put("targetBenefitList", targetBenefitList);
		
		return targetBenefitMap;
	}
	
	public int paymentGiver(@RequestBody GiverPaymentReqDto giverPaymentReqDto) {	
		return givingDetailRepository.toGiverPayment(giverPaymentReqDto.toGiverPaymentEntity());
	}
}
