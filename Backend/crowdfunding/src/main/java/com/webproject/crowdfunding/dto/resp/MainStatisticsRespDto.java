package com.webproject.crowdfunding.dto.resp;

import com.webproject.crowdfunding.entity.MainStatisticsFunder;
import com.webproject.crowdfunding.entity.MainStatisticsGiver;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MainStatisticsRespDto {
	private int giverTotal;
	private int givingTotalSum;
	private int funderTotal;
	private int fundingPriceTotal;
	
	
}
