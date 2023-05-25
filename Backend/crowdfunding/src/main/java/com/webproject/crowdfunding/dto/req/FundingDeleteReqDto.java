package com.webproject.crowdfunding.dto.req;

import java.util.ArrayList;
import java.util.List;

import com.webproject.crowdfunding.entity.Reward;

import lombok.Data;

@Data
public class FundingDeleteReqDto {
	private int fundingId;
	private List<Integer> rewardIds;
	
	public List<Reward> deleteFundingToEntity() {
			List<Reward> rewards = new ArrayList<>();
			for(int i = 0; i < rewardIds.size(); i++) {
				int rewardId = rewardIds.get(i);
				Reward reward = Reward.builder()
				.fundingId(fundingId)
				.rewardId(rewardId)
				.build();
				rewards.add(reward);
			}
		return rewards;
	}
}
