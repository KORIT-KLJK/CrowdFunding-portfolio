package com.webproject.crowdfunding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GivingPage {
	private int givingPageId;
	private String mainImgUrl;
	private String givingName;
	private String centerName;
	private int givingPageTotal;
}
