package com.webproject.crowdfunding.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.SearchPageReqDto;
import com.webproject.crowdfunding.dto.resp.SearchPageRespDto;
import com.webproject.crowdfunding.repository.PageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PageService {

	private final PageRepository pageRepository;
	
	
	public Map<String, Object> searchPages(SearchPageReqDto searchPageReqDto) {
		List<SearchPageRespDto> list = new ArrayList<>();
		
		int index = (searchPageReqDto.getPage() - 1) * 20;
		Map<String, Object> map = new HashMap<>();
		map.put("index", index);
		map.put("searchCategory", searchPageReqDto.getSearchCategory());
		map.put("searchSort", searchPageReqDto.getSearchSort());
		map.put("searchTema", searchPageReqDto.getSearchTema());
		map.put("searchValue", searchPageReqDto.getSearchValue());
		
		int totalCount = pageRepository.getTotalCount(map);
		
		System.out.println(map);
		
		map.put("totalCount", totalCount);
		pageRepository.searchPageInfo(map).forEach(book-> {
			list.add(book.toDto());
		});
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("totalCount", totalCount);
		responseMap.put("pageList", list);
		System.out.println(responseMap);
		return responseMap;
	}
}
