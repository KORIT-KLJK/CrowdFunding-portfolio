package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.GiverPayment;

@Mapper
public interface GiverPaymentRepository {
	public int toGiverPayment(GiverPayment giverPayment);
}
