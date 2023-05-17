package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GivingMainRespDto {
	private int pageId;
	private String pageTitle;
	private int givingTotal;
	private int goalTotal;
	private String imgUrl;
	private int givingCategoryId;
	private String givingCategoryName;
	private String centerName;
	private String eventStatus;
	private int achievementRate;
	private int amountCollected;
}
