package com.webproject.crowdfunding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PostsImg {
	private int postsImgId;
	private int fundingId;
	private String originName;
	private String tempName;
	private String imgSize;
}
