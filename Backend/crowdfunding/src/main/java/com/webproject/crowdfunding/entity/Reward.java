package com.webproject.crowdfunding.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Reward {
	private int rewardId;
	private String rewardName;
	private int rewardPrice;
	private int fundingId;
}
