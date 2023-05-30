package com.webproject.crowdfunding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GivingSubImg {
	private int gpsiId;
	private int givingPageId;
	private String subImgUrl;
	private String pageCategory;
}
