package com.webproject.crowdfunding.dto.req;

import java.util.List;

import lombok.Data;

@Data
public class RegisterPageReqDto {
	private String pageCategory;
	private String detailCategory;
	private String title;
	private String storyTitle;
	private String story;
	private String imgUrl;
	private int goalTotal;
	private List<String> rewardName;
	private List<Integer> rewardPrice;
	private String companyName;
	private String ceoName;
	private String companyAddress;
	private String companyPhoneNumber;
	private String email;
}
