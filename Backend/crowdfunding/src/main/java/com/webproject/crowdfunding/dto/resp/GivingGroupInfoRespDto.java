package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GivingGroupInfoRespDto {
	private int centerId;
	private String centerName;
	private String centerAddress;
	private int centerPhoneNumber;
	private String centerCeo;
	private int givingTotal;
	private int pageId;
}
