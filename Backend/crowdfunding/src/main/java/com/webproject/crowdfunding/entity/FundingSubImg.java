package com.webproject.crowdfunding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingSubImg {
	private int fpsiId;
	private int fundingId;
	private String subImgUrl;
	private String pageCategory;
}
