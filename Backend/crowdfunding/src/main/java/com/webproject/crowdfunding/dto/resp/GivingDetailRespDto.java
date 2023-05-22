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
	private String dDay;
	private int givingTotal;
	private String storyTitle;
	private String storyContent;
	private int centerId;
	private String centerName;
	private String centerAddress;
	private String centerPhoneNumber;
	private String centerCEO;
}
