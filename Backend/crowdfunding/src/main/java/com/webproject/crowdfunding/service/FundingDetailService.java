package com.webproject.crowdfunding.service;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.resp.FundingDetailRespDto;
import com.webproject.crowdfunding.repository.FundingDetailRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundingDetailService {

	private final FundingDetailRepository fundingDetailRepository;
	
	public FundingDetailRespDto fundingDetail(int pageId) {
		
		return fundingDetailRepository.fundingDetail(pageId).getDetailFunding();
	}
	
}
