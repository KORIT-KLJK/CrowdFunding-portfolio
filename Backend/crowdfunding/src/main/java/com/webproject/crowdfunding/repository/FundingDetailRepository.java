package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Funding;

@Mapper
public interface FundingDetailRepository {
	public Funding fundingDetail(int pageId);
}
