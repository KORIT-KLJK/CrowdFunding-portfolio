package com.webproject.crowdfunding.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Address;
import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.Funder;
import com.webproject.crowdfunding.entity.Funding;
import com.webproject.crowdfunding.entity.Reward;

@Mapper
public interface FundingDetailRepository {
	public Funding fundingDetail(int pageId);
	public List<Reward> getReward(int pageId);
	public BusinessInfo getBusinessInfo(int pageId);
	public List<Funding> getBreakdown(int pageId);
	public Address getAddressId(int userId);
	public int toSaveFunder(Funder funder);
	public int saveFundingModify(Funding funding);
	public int saveDeleteFunding(Reward reward);
}
