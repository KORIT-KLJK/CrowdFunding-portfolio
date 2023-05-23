package com.webproject.crowdfunding.dto.req;

import lombok.Data;

@Data
public class FundingEventReqDto {
	private int page;
	private String fundingSortingReward;
	private String fundingSortingStatus;
}
