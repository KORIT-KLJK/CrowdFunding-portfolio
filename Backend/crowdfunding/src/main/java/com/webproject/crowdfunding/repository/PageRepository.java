package com.webproject.crowdfunding.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Page;

@Mapper
public interface PageRepository {
	public List<Page> searchPageInfo(Map<String, Object> map);
	public int getTotalCount(Map<String, Object> map);
}
