package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.webproject.crowdfunding.dto.resp.MainStatisticsRespDto;
import com.webproject.crowdfunding.entity.MainStatisticsGiver;
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
