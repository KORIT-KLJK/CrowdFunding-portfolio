package com.webproject.crowdfunding.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Funder;
import com.webproject.crowdfunding.entity.GiverPayment;

@Mapper
public interface AuthRepository {
	public int toSaveFunder(List<Funder> funder);
	public int toGiverPayment(GiverPayment giverPayment);
}
