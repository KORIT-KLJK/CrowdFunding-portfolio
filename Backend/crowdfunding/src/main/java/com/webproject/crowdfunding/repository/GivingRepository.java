package com.webproject.crowdfunding.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Giving;
import com.webproject.crowdfunding.entity.GivingCategory;
import com.webproject.crowdfunding.entity.TodayGiving;

@Mapper
public interface GivingRepository {
	public List<GivingCategory> getGivingCategory();
	public List<Giving> getGivings(Map<String, Object> map);
	public TodayGiving getTodayGiving();
}
