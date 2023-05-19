package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BreakdownRespDto {
	private int fundingId;
	private int userId;
	private String username;
	private int totalRewardPrice;
}
