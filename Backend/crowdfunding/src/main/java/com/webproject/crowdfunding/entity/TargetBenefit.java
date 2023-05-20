package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TargetBenefit {
	private int tbId;
	private String pageCategory;
	private String target;
	private int targetCount;
	private String benefitEffect;
	private LocalDate businessStartDate;
	private LocalDate businessEndDate;
	private int givingPageId;
}
