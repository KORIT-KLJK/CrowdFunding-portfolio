package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import com.webproject.crowdfunding.dto.resp.SearchPageRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Page {
	private int pageId;
	private String pageTitle;
	private String fundingSummaryName;
	private String eventStatus;
	private int pageTotalAmount;
	private String imgUrl;
	
	public SearchPageRespDto toDto() {
		return SearchPageRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.fundingSummaryName(fundingSummaryName)
				.eventStatus(eventStatus)
				.pageTotalAmount(pageTotalAmount)
				.imgUrl(imgUrl)
				.build();
	}
}


