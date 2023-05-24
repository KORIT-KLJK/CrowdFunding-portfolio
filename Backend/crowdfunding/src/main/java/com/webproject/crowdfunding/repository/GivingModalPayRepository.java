package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.GivingModalPay;

@Mapper
public interface GivingModalPayRepository {
	public GivingModalPay toGivingModalPay(int pageId);
}
