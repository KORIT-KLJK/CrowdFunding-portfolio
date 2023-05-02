package com.webproject.crowdfunding.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Category {
	private int categoryId;
	private String categoryName;
}
