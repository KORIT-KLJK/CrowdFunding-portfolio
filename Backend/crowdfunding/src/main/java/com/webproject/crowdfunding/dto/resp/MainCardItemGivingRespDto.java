package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MainCardItemGivingRespDto {
	private int pageId;
	private String pageTitle;
	private String centerName;
	private String imgUrl;
	private int givingTotal;
	private int categoryId;
	private int achievementRate;
}
