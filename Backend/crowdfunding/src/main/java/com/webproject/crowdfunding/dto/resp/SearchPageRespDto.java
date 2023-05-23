package com.webproject.crowdfunding.dto.resp;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SearchPageRespDto {
	private int pageId;
	private String pageTitle;
	private String userName;
	private String eventStatus;
	private int pageTotalAmount;
	private String imgUrl;
	private int page;
}
