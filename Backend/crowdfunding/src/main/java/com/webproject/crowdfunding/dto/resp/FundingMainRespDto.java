package com.webproject.crowdfunding.dto.resp;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FundingMainRespDto {
	private int pageId;
	private String pageTitle;
	private String username;
	private String eventStatus;
	private int goalTotal;
	private String totalRewardPrice;
	private String imgUrl;
	private int fundingCategoryId;
	private int recentSort;
	private int nearDeadlineSort;
}
