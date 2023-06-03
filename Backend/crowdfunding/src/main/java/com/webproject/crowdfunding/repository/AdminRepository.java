package com.webproject.crowdfunding.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Funding;
import com.webproject.crowdfunding.entity.Giving;
import com.webproject.crowdfunding.entity.Reward;

@Mapper
public interface AdminRepository {
	public int saveFundingModify(Funding funding);
	public int saveDeleteFundingId(Funding funding);
	public int saveDeleteRewardId(List<Reward> reward);
	public int saveGivingModify(Giving giving);
	public int saveGivingDelete(int pageId);
	public int saveDeleteGivingDonationUsePlan(int pageId);
	public int saveDeleteGivingTargetBenefit(int pageId);
}
