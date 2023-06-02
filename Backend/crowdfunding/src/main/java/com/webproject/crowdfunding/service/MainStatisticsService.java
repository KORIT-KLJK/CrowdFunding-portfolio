package com.webproject.crowdfunding.service;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.resp.MainStatisticsRespDto;
import com.webproject.crowdfunding.repository.MainStatisticsRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainStatisticsService {
	private final MainStatisticsRepository mainStatisticsRepository;
	
	public MainStatisticsRespDto giver() {
		return mainStatisticsRepository.getGivingTotal().toGiverEntity();
	}
	
	public MainStatisticsRespDto funder() {
		return mainStatisticsRepository.getFundingTotal().toFunderEntity();
	} 
}
