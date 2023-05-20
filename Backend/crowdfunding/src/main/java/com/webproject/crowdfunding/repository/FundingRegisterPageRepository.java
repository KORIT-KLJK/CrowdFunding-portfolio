package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.FundingRegisterPage;
import com.webproject.crowdfunding.entity.Reward;

@Mapper
public interface FundingRegisterPageRepository {
	public int toSaveRegisterPage(FundingRegisterPage registerPage);
	public int toSaveBusinessInfo(BusinessInfo businessInfo);
	public int toSaveReward(Reward reward);
}
