package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.MainCardItemFundingRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MainCardItemFunding {
	private int pageId;
	private String pageTitle;
	private String userName;
	private int joinPercent;
	private String imgUrl;
	private int funderId;
	private int rewardPrice;
	private int rewardId;
	
	public MainCardItemFundingRespDto toSaveMainCardFundingRespDto() {
		return MainCardItemFundingRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.userName(userName)
				.joinPercent(joinPercent)
				.imgUrl(imgUrl)
				.funderId(funderId)
				.rewardPrice(rewardPrice)
				.rewardId(rewardId)
				.build();
		
	}
	
}
