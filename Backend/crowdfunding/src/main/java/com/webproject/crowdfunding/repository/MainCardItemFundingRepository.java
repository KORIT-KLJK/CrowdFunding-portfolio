package com.webproject.crowdfunding.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.MainCardItemFunding;

@Mapper
public interface MainCardItemFundingRepository {
	public List<MainCardItemFunding> saveCardItemFunding();
}
