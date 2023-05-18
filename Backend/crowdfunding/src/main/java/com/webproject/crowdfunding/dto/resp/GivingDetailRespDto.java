package com.webproject.crowdfunding.dto.resp;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GivingDetailRespDto {
	private int givingId;
	private String givingTitle;
	private int achievementRate;
	private LocalDate registerDate;
	private LocalDate endDate;
	private int givingTotal;
	private String storyTitle;
	private String storyContent;
}
