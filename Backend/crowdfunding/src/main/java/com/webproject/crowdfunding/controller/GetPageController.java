package com.webproject.crowdfunding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetPageController {
	
	@GetMapping("get/search/page")
	public ResponseEntity<?> searchPage() {
		return ResponseEntity.ok().body(null);
	}
}
