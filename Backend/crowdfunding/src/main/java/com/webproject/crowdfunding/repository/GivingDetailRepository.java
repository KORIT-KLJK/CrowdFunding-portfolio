package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Giving;

@Mapper
public interface GivingDetailRepository {
	public Giving getGivingDetail(int pageId);
}
