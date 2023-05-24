package com.webproject.crowdfunding.dto.req;

import java.util.ArrayList;
import java.util.List;

import com.webproject.crowdfunding.entity.Funder;

import lombok.Data;

@Data
public class FunderReqDto {
	private int userId;
	private int addressId;
	private List<Integer> rewardIds;
	private List<Integer> counts;
	
	public List<Funder> toFunderEntity() {
	    List<Funder> funders = new ArrayList<>();
	    for (int i = 0; i < counts.size(); i++) {
	        int rewardId = rewardIds.get(i);
	        int count = counts.get(i);
	        	for (int j = 0; j < count; j++) {
		            Funder funder = Funder.builder()
		                    .userId(userId)
		                    .addressId(addressId)
		                    .rewardId(rewardId)
		                    .build();
		            funders.add(funder);
	        	}
	    	}
	    return funders;
	}
}
