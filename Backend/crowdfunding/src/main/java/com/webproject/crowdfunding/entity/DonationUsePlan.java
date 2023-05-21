package com.webproject.crowdfunding.entity;

import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DonationUsePlan {
	private int dupId;
	private String pageCategory;
	private String giveUsing;
	private int donationExpense;
	private int givingPageId;
}
