package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MainCardItemFundingRespDto {
	private int pageId;
	private String fundingSummaryName;
	private String pageTitle;
	private String userName;
	private int joinPercent;
	private String imgUrl;
	private int funderId;
	private int rewardPrice;
	private int rewardId;
}
