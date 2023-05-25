package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.MainStatisticsFunder;
import com.webproject.crowdfunding.entity.MainStatisticsGiver;

@Mapper
public interface MainStatisticsRepository {
	public MainStatisticsGiver getGivingTotal();
	public MainStatisticsFunder getFundingTotal();

	
}
