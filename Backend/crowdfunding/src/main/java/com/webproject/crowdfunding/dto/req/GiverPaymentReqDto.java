package com.webproject.crowdfunding.dto.req;

import com.webproject.crowdfunding.entity.GiverPayment;

import lombok.Data;

@Data
public class GiverPaymentReqDto {
	private int userId;
	private int givingTotal;
	private int pageId;
	
	public GiverPayment toGiverPaymentEntity() {
		return GiverPayment.builder()
				.userId(userId)
				.givingTotal(givingTotal)
				.pageId(pageId)
				.build();
	}
}
