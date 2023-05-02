package com.webproject.crowdfunding.entity;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
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
