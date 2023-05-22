package com.webproject.crowdfunding.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Giving;
import com.webproject.crowdfunding.entity.GivingGroupInfo;

@Mapper
public interface GivingDetailRepository {
	public Giving getGivingDetail(int pageId);
	public List<Giving> getMostGivings(int pageId);
}
