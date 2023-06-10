package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import com.webproject.crowdfunding.dto.resp.GivingParticipationDetailsRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Test {
	private int userId;
	private String username;
	private int pageId;
	private int givingTotal;
	private LocalDate givingDate;
	
	public GivingParticipationDetailsRespDto toParticipationDetails() {
		return GivingParticipationDetailsRespDto.builder()
				.pageId(pageId)
				.userId(userId)
				.username(username)
				.givingTotal(givingTotal)
				.givingDate(givingDate)
				.build();
	}
}
	