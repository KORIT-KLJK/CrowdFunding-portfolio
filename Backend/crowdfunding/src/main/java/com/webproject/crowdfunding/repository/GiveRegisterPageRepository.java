package com.webproject.crowdfunding.repository;

import org.apache.ibatis.annotations.Mapper;

import com.webproject.crowdfunding.entity.Center;
import com.webproject.crowdfunding.entity.DonationUsePlan;
import com.webproject.crowdfunding.entity.GiveRegisterPage;
import com.webproject.crowdfunding.entity.GivingSubImg;
import com.webproject.crowdfunding.entity.TargetBenefit;

@Mapper
public interface GiveRegisterPageRepository {
	public int toSaveCenter(Center center);
	public int toSaveGiveRegisterPage(GiveRegisterPage giveRegisterPage);
	public int toSaveDonation(DonationUsePlan donationUsePlan);
	public int toSaveTarget(TargetBenefit targetBenefit);
	public int toSaveGivingSubImg(GivingSubImg givingSubImg);
}
