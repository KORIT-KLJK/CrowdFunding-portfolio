package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GivingDonationUsePlanRespDto {
	private String content;
	private int donationExpense;
	private int goalTotal;
	private int pageId;
}
