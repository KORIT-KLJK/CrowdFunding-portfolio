package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BusinessInfoRespDto {
	private int businessInfoId;
	private String companyName;
	private String ceoName;
	private String companyAddress;
	private String companyPhoneNumber;
	private String ceoEmail;
	private int fundingId;
}
