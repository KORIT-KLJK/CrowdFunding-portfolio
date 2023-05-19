package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FundingDetailRespDto {
	private int fundingId;
	private String fundingTitle;
	private String username;
	private String deadline;
	private int goalTotal;
	private int totalRewardPrice;
	private String storyTitle;
	private String storyContent;
	private String imgUrl;
	private int joinPercent;
}
