package com.webproject.crowdfunding.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Giver {
	private int giverId;
	private int userId;
	private int fundingId;
	private int rewardId;
	private String addressName;
}
