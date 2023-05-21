package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GiveRegisterPage {
	private int givingPageId;
	private String pageCategory;
	private String detailCategory;
	private String title;
	private String storyTitle;
	private String story;
	private int centerId;
	private String imgUrl;
	private int goalTotal;
	private LocalDate endDate;
}
