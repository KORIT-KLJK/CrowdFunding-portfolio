package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Authority;
import com.webproject.crowdfunding.entity.User;

// iuejeong: xml file로 대체
// iuejeong: interface를 써야 Mapper를 쓸 수 있고, mybatis에서 받는다.
@Mapper
public interface SignUpRepository {
	public User findUserByEmail(String email);
	public int signUpUser(User user);
	public int saveAuthority(Authority authority);
}
