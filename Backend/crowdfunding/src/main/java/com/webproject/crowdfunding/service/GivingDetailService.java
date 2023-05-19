package com.webproject.crowdfunding.service;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.resp.GivingDetailRespDto;
import com.webproject.crowdfunding.repository.GivingDetailRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GivingDetailService {
	private final GivingDetailRepository givingDetailRepository;
	
	public GivingDetailRespDto givingDetail(int pageId) {
		return givingDetailRepository.getGivingDetail(pageId).givingDetail();
	}

}
