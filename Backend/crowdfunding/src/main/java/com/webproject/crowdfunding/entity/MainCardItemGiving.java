package com.webproject.crowdfunding.entity;

import com.webproject.crowdfunding.dto.resp.MainCardItemGivingRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MainCardItemGiving {
	private int pageId;
	private String pageTitle;
	private String centerName;
	private String imgUrl;
	private int givingTotal;
	private int categoryId;
	private int achievementRate;
	
	// DB에서 xml을 통해 넘어온 데이터를 entity에서 변수에 담아준뒤 RespDto를 통해 
	//	web page에 띠워 주어야하는데 이를 서비스나 웹에 맞게 데이터를 쓰기위해서는
	//	bulider를 통해 데이터를 가공해줘야하여 dto와 같은 값 builder로 만들어줌.
	public MainCardItemGivingRespDto toSaveMainCardGivingRespDto() {
		return MainCardItemGivingRespDto.builder()
				.pageId(pageId)
				.pageTitle(pageTitle)
				.centerName(centerName)
				.imgUrl(imgUrl)
				.givingTotal(givingTotal)
				.categoryId(categoryId)
				.achievementRate(achievementRate)
				.build();
	}
	
}
