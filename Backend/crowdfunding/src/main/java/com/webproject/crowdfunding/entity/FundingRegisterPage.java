package com.webproject.crowdfunding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingRegisterPage {
	private int fundingId;
	private String pageCategory;
	private String detailCategory;
	private String title;
	private String storyTitle;
	private String story;
	private String imgUrl;
	private int goalTotal;
	private String endDate;
	private String nickname;
}
