package com.webproject.crowdfunding.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.FundingRegisterPage;
import com.webproject.crowdfunding.entity.FundingSubImg;
import com.webproject.crowdfunding.entity.PostsImg;
import com.webproject.crowdfunding.entity.Reward;

@Mapper
public interface FundingRegisterPageRepository {
	public int toSaveRegisterPage(FundingRegisterPage registerPage);
	public int registerPostsImgs(List<PostsImg> postsImgs);
	public int toSaveBusinessInfo(BusinessInfo businessInfo);
	public int toSaveReward(Reward reward);
	public int toSaveFundingSubImg(FundingSubImg fundingSubImg);
}
