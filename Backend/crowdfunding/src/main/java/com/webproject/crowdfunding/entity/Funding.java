package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Funding {
	private int fundingId;
	private String fundingName;
	private int userId;
	private int goalTotal;
	private LocalDate period;
	private String story;
	private String coverImgUrl;
	private LocalDate registrationDate;
}
