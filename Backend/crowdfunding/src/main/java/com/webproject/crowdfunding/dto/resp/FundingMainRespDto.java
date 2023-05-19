package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FundingMainRespDto {
	private int pageId;
	private String pageTitle;
	private String username;
	private int recentSort;
	private String nearDeadlineSort;
	private String eventStatus;
	private int goalTotal;
	private int totalRewardPrice;
	private int joinPercent;
	private String imgUrl;
	private int fundingCategoryId;
}
