package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.TodayGivingRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TodayGiving {
	private int todayGivers;
	private int todayDonations;
	
	public TodayGivingRespDto todayGivingToEntity() {
		return TodayGivingRespDto.builder()
				.todayGivers(todayGivers)
				.todayDonations(todayDonations)
				.build();
	}
}
