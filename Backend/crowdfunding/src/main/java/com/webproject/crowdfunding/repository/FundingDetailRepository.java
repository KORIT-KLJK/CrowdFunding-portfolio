package com.webproject.crowdfunding.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Funding;
import com.webproject.crowdfunding.entity.Reward;

@Mapper
public interface FundingDetailRepository {
	public Funding fundingDetail(int pageId);
	public List<Reward> getReward(int pageId);
}
