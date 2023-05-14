package com.webproject.crowdfunding.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GivingCategoryRespDto {
	private int givingCategoryId;
	private String categoryName;
}
