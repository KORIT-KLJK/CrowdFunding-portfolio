package com.webproject.crowdfunding.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.GiverPayment;
import com.webproject.crowdfunding.entity.Giving;
import com.webproject.crowdfunding.entity.GivingGroupInfo;
import com.webproject.crowdfunding.entity.Test;

@Mapper
public interface GivingDetailRepository {
	public Giving getGivingDetail(int pageId);
	public List<Giving> getMostGivings(int pageId);
	public List<Test> getParticipationDetails(int pageId);
	public List<Giving> getDonationUsePlan(int pageId);
	public List<Giving> getTargetBenefit(int pageId);
}
