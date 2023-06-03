package com.webproject.crowdfunding.dto.resp;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GivingParticipationDetailsRespDto {
	private int giverId;
	private int pageId;
	private int userId;
	private String username;
	private int givingTotal;
	private LocalDate givingDate;
}
