package com.webproject.crowdfunding.security;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class JwtRespDto {
	private String grantType;
	private String accessToken;
}
