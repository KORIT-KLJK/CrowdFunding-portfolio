package com.webproject.crowdfunding.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.FundingMain;
import com.webproject.crowdfunding.entity.FundingCategory;

@Mapper
public interface FundingRepository {
	public List<FundingCategory> getFundingCategory();
	public List<FundingMain> saveFunding(Map<String, Object> eventStatusMap);
}
