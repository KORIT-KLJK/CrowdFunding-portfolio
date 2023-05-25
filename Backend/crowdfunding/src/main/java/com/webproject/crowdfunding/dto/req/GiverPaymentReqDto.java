package com.webproject.crowdfunding.dto.req;

import com.webproject.crowdfunding.entity.GiverPayment;

import lombok.Data;

@Data
public class GiverPaymentReqDto {
	private int pageId;
	private int userId;
	private int givingTotal;
	
	public GiverPayment toGiverPaymentEntity() {
		return GiverPayment.builder()
				.pageId(pageId)
				.userId(userId)
				.givingTotal(givingTotal)
				.build();
	}
}
