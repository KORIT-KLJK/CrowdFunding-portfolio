package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FundingEventRespDto {
	private String eventStatus;
}
