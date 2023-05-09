package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webproject.crowdfunding.dto.req.SearchPageReqDto;
import com.webproject.crowdfunding.service.PageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class GetPageController {
	
	private final PageService pageService;
	
	@GetMapping("get/search/page")
	public ResponseEntity<?> searchPage(SearchPageReqDto searchPageReqDto) {
		return ResponseEntity.ok().body(pageService.searchPages(searchPageReqDto));
	}
}
