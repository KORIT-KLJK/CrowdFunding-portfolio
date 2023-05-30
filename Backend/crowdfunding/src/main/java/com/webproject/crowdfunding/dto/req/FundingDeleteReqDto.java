package com.webproject.crowdfunding.dto.req;

import java.util.ArrayList;
import java.util.List;

import com.webproject.crowdfunding.entity.Funding;
import com.webproject.crowdfunding.entity.Reward;

import lombok.Data;

@Data
public class FundingDeleteReqDto {
	private int fundingId;
	private List<Integer> rewardIds;
	
	public Funding deleteFundingIdToEntity() {
		return Funding.builder().fundingId(fundingId).build();
	}
	
	public List<Reward> deleteRewardIdToEntity() {
			List<Reward> rewards = new ArrayList<>();
			for(int i = 0; i < rewardIds.size(); i++) {
				int rewardId = rewardIds.get(i);
				Reward reward = Reward.builder()
				.rewardId(rewardId)
				.build();
				rewards.add(reward);
			}
		return rewards;
	}
}
