package com.webproject.crowdfunding.dto.req;

import lombok.Data;

@Data
public class SearchGivingReqDto {
	int page;
	private String categoryId;
	private String selectedOrder;
}
