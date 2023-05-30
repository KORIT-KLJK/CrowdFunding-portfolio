package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.MainStatisticsRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MainStatisticsFunder {
	private int funderTotal;
	private int fundingPriceTotal;
	
	public MainStatisticsRespDto toFunderEntity() {
		return MainStatisticsRespDto.builder()
				.funderTotal(funderTotal)
				.fundingPriceTotal(fundingPriceTotal)
				.build();
	}
}
