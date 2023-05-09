package com.webproject.crowdfunding.dto.req;

import lombok.Data;

@Data
public class SearchPageReqDto {
	private int page;
	private String searchValue;
	private String searchCategory;
	private String searchSort;
	private String searchTema;
}
