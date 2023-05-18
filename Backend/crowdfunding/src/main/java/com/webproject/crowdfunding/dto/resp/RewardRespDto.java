package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RewardRespDto {
	private int rewardId;
	private String rewardName;
	private int rewardPrice;
	private int fundingId;
}
