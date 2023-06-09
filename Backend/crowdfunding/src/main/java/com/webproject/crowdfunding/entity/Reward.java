package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import com.webproject.crowdfunding.dto.resp.RewardRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reward {
	private String pageCategory;
	private int rewardId;
	private String rewardName;
	private int rewardPrice;
	private int fundingId;
	private LocalDate endDate;
	private String userCount;
	
	public RewardRespDto getFundingReward() {
		return RewardRespDto.builder()
				.rewardId(rewardId)
				.rewardName(rewardName)
				.rewardPrice(rewardPrice)
				.fundingId(fundingId)
				.endDate(endDate)
				.userCount(userCount)
				.build();
	}
}
