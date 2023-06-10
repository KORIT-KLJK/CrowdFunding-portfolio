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
	private String fundingSummaryName;
	private String pageTitle;
	private int joinPercent;
	private String imgUrl;
	
	public MainCardItemFundingRespDto toSaveMainCardFundingRespDto() {
		return MainCardItemFundingRespDto.builder()
				.pageId(pageId)
				.fundingSummaryName(fundingSummaryName)
				.pageTitle(pageTitle)
				.joinPercent(joinPercent)
				.imgUrl(imgUrl)
				.build();
		
	}
	
}
