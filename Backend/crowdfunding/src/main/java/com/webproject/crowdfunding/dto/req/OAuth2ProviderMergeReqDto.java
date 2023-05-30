package com.webproject.crowdfunding.dto.req;


import lombok.Data;

@Data
public class OAuth2ProviderMergeReqDto {
	private String email;
	private String password;
	private String provider;
}