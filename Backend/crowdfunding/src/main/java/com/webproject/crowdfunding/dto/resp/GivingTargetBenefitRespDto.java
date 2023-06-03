package com.webproject.crowdfunding.dto.resp;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GivingTargetBenefitRespDto {
	private String target;
	private int targetCount;
	private String benefitEffect;
	private int pageId;
	private LocalDate businessStartDate;
	private LocalDate businessEndDate;

}
