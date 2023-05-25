package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.MainStatisticsRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class MainStatisticsGiver {
	private int giverTotal;
	private int givingTotalSum;	
	
	public MainStatisticsRespDto toGiverEntity() {
		return MainStatisticsRespDto.builder()
				.giverTotal(giverTotal)
				.givingTotalSum(givingTotalSum)
				.build();
	}
	
}


