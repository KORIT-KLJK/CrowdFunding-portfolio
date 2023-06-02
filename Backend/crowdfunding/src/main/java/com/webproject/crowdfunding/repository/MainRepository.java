package com.webproject.crowdfunding.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.MainCardItemFunding;
import com.webproject.crowdfunding.entity.MainCardItemGiving;
import com.webproject.crowdfunding.entity.MainStatisticsFunder;
import com.webproject.crowdfunding.entity.MainStatisticsGiver;

@Mapper
public interface MainRepository {
	public List<MainCardItemFunding> saveCardItemFunding();
	public List<MainCardItemGiving> saveCardItemGiving(Map<String, Object> map);
	public MainStatisticsGiver getGivingTotal();
	public MainStatisticsFunder getFundingTotal();
}
