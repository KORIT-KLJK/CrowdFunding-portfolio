package com.webproject.crowdfunding.entity;

import java.time.LocalDate;
import java.util.List;

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
	private LocalDate endDate;
	private String nickname;
}
