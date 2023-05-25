package com.webproject.crowdfunding.controller;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.service.MainStatisticsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MainStatisticsController {
	private final MainStatisticsService mainStatisticsService;
	
	@GetMapping("/main/givingStatistics")
	public ResponseEntity<?> StatisticsGiverData() {
		return ResponseEntity.ok(mainStatisticsService.giver());
	}
	
	@GetMapping("/main/fundingStatistics")
	public ResponseEntity<?> StatisticsFunderData() {
		return ResponseEntity.ok(mainStatisticsService.funder());
	}
	
}
/*
  	클라이언트로 부터 get요청을 받아 getMapping을 통하여(동일한 주소 값으로 들어옴.)
  	public ResponseEntity<?> 를 통해 메소드의 매개변수에 요청을 받아옴. 이번 요청은 값이 없으므로 매개변수가 없음.
  	다음 서비스로 접근중
  	
 */