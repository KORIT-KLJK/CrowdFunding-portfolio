package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TodayGivingRespDto {
	private int todayGivers;
	private int todayDonations;
}
