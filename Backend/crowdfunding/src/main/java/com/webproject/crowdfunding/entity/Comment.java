package com.webproject.crowdfunding.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Comment {
	private int commentId;
	private int userId;
	private int fundingId;
	private String commentText;
}
