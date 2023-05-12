package com.webproject.crowdfunding.dto.resp;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FundingMainRespDto {
	private int pageId;
	private String pageTitle;
	private String username;
	private String eventStatus;
	private String totalRewardPrice;
	private String imgUrl;
}
