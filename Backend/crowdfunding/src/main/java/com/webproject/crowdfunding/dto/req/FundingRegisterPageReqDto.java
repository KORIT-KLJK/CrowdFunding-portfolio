package com.webproject.crowdfunding.dto.req;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.web.multipart.MultipartFile;

import com.webproject.crowdfunding.entity.BusinessInfo;
import com.webproject.crowdfunding.entity.FundingRegisterPage;
import com.webproject.crowdfunding.entity.FundingSubImg;
import com.webproject.crowdfunding.entity.Reward;

import lombok.Data;

@Data
public class FundingRegisterPageReqDto {
	private String pageCategory;
	private String detailCategory;
	@NotBlank(message= "제목을 입력해주세요.")
	private String title;
	
	@NotBlank(message= "스토리 제목을 입력해주세요.")
	private String storyTitle;
	
	@NotBlank(message= "스토리 내용을 입력해주세요.")
	private String story;
	
	@NotNull(message= "메인 이미지를 첨부해주세요.")
	private MultipartFile mainImgUrl;
	
	@NotNull(message= "상세 이미지를 첨부해주세요.")
	private MultipartFile subImgUrl;
	
	private int goalTotal;
	
	@NotBlank(message= "종료 날짜를 입력해주세요.")
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$",
            message = "종료 날짜를 형식에 맞게 작성해주세요.")
	private String endDate;
    
    @NotEmpty(message= "리워드는 한 개 이상이어야 합니다.")
    private List<
    @NotBlank(message= "리워드를 입력해주세요.")
    String> rewardName;
    
	private List<Integer> rewardPrice;
    
    @NotBlank(message= "상호명을 입력해주세요.")
	private String companyName;
    
    @NotBlank(message= "대표명을 입력해주세요.")
	private String ceoName;
    
    @NotBlank(message= "닉네임을 입력해주세요.")
	private String nickname;
    
    @NotBlank(message= "사업자 주소를 입력해주세요.")
	private String companyAddress;
    
    @NotBlank(message= "고객센터 전화번호를 입력해주세요.")
	private String companyPhoneNumber;
    
    @NotBlank(message= "이메일을 입력해주세요.")
    @Email
	private String email;
	
	public FundingRegisterPage toRegisterEntity(String filePath) {
		MultipartFile file = mainImgUrl;
		if(file == null) {
			return null;
		}
		String originFileName = file.getOriginalFilename();
		String extension = originFileName.substring(originFileName.lastIndexOf("."));
		String tempFileName = UUID.randomUUID().toString().replaceAll("-", "") + extension;
		Path uploadPath = Paths.get(filePath + "main/" + tempFileName);	// 경로/post/UUID.jpg
		System.out.println("filePath: " + filePath);
		File f = new File(filePath + "main");
		if(!f.exists()) {
			f.mkdirs();
		}
		
		try {
			Files.write(uploadPath, file.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return FundingRegisterPage.builder()
				.pageCategory(pageCategory)
				.detailCategory(detailCategory)
				.title(title)
				.storyTitle(storyTitle)
				.story(story)
				.goalTotal(goalTotal)
				.mainImgUrl(tempFileName)
				.endDate(endDate)
				.nickname(nickname)
				.build();
	}
	
	public BusinessInfo toBusinessEntity() {
		return BusinessInfo.builder()
				.pageCategory(pageCategory)
				.companyName(companyName)
				.ceoName(ceoName)
				.companyAddress(companyAddress)
				.companyPhoneNumber(companyPhoneNumber)
				.ceoEmail(email)
				.build();
	}
	

	public List<Reward> toRewardEntity() {
	    List<Reward> rewards = new ArrayList<>();
	    int size = Math.min(rewardName.size(), rewardPrice.size()); // 두 리스트 중 작은 크기를 선택

	    for (int i = 0; i < size; i++) {
	        System.out.println("[" + i + "]: " + rewardPrice.get(i));
	        System.out.println("[" + i + "]: " + rewardName.get(i));
	        String name = rewardName.get(i);
	        int price = rewardPrice.get(i);
	        Reward reward = Reward.builder()
	            .pageCategory(pageCategory)
	            .rewardName(name)
	            .rewardPrice(price)
	            .build();
	        rewards.add(reward);
	    }

	    return rewards;
	}
	
	public FundingSubImg toFundingSubImgEntity(String filePath) {
		MultipartFile file = subImgUrl;
		if(file == null) {
			return null;
		}
		String originFileName = file.getOriginalFilename();
		String extension = originFileName.substring(originFileName.lastIndexOf("."));
		String tempFileName = UUID.randomUUID().toString().replaceAll("-", "") + extension;
		Path uploadPath = Paths.get(filePath + "sub/" + tempFileName);	// 경로/post/UUID.jpg
		File f = new File(filePath + "sub");
		if(!f.exists()) {
			f.mkdirs();
		}
		
		try {
			Files.write(uploadPath, file.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return FundingSubImg.builder()
				.subImgUrl(tempFileName)
				.pageCategory(pageCategory)
				.build();
	}
	
}











