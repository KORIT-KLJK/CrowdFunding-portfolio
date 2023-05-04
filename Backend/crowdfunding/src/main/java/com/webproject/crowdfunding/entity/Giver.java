package com.webproject.crowdfunding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Giver {
	private int giverId;
	private int userId;
	private int fundingId;
	private int rewardId;
	private String addressName;
}
