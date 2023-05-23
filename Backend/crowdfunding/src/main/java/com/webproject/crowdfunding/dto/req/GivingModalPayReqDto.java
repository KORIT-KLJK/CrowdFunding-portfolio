package com.webproject.crowdfunding.dto.req;

import com.webproject.crowdfunding.entity.GivingModalPay;

import lombok.Data;

@Data
public class GivingModalPayReqDto {
	private int userId;
	private int givingTotal;
	private int pageId;
	
	public GivingModalPay toGivingModalPayEntity() {
		return GivingModalPay.builder()
				.userId(userId)
				.givingTotal(givingTotal)
				.pageId(pageId)
				.build();
	}
}
