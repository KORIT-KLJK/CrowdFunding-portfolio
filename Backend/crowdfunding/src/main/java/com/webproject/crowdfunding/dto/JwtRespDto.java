package com.webproject.crowdfunding.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class JwtRespDto {
	private String grantType;
	private String accessToken;

}
