package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FundingCategoryRespDto {
	private int fundingCategoryId;
	private String categoryName;
}
