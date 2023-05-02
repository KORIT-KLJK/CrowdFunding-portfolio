package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.User;

@Mapper
public interface SignUpRepository {
	public int signUpUser(User user);
}
