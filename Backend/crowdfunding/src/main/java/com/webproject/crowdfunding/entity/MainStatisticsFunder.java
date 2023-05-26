package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.MainStatisticsRespDto;

import lombok.Builder;
import lombok.Data;


@Data
@Builder
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
