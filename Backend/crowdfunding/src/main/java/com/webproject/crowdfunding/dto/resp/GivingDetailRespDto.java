package com.webproject.crowdfunding.dto.resp;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GivingDetailRespDto {
	private int pageId;
	private String pageTitle;
	private String imgUrl;
	private int achievementRate;
	private LocalDate registerDate;
	private LocalDate endDate;
	private int givingTotal;
	private String storyTitle;
	private String storyContent;
}
