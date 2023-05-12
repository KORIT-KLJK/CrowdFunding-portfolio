package com.webproject.crowdfunding.dto.req;

import lombok.Data;

@Data
public class SearchFundingReqDto {
	int page;
	private String searchStatus;
	private String searchCategory;
}
