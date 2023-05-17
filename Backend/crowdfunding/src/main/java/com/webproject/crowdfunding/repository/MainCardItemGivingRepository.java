package com.webproject.crowdfunding.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.MainCardItemGiving;

@Mapper		//Mapper는 레파지토리와 마이바티스를 연결해주는 어노테이션.
public interface MainCardItemGivingRepository {
	public List<MainCardItemGiving> saveCardItemGiving(Map<String, Object> map);
}
