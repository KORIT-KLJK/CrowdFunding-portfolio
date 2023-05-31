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

import com.webproject.crowdfunding.entity.Center;
import com.webproject.crowdfunding.entity.DonationUsePlan;
import com.webproject.crowdfunding.entity.GiveRegisterPage;
import com.webproject.crowdfunding.entity.GivingSubImg;
import com.webproject.crowdfunding.entity.TargetBenefit;

import lombok.Data;

@Data
public class GivingRegisterReqDto {
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
    
	@NotEmpty(message= "기부금 사용 계획은 한 개 이상이어야 합니다.")
	private List<
	@NotBlank(message= "기부금 사용 내역을 입력해주세요.")
	String> giveUsing;
	
	private List<Integer> donationExpense;
	
    @NotBlank(message= "사업 시작 날짜를 입력해주세요.")
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$",
            message = "사업 시작 날짜를 형식에 맞게 작성해주세요.")
	private String businessStartDate;
    
    @NotBlank(message= "사업 종료 날짜를 입력해주세요.")
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$",
            message = "사업 종료 날짜를 형식에 맞게 작성해주세요.")
	private String businessEndDate;
    
    @NotBlank(message= "대상을 입력해주세요.")
	private String target;
    
	private int targetCount;
    
    @NotBlank(message= "사업 효과를 입력해주세요.")
	private String benefitEffect;
    
    @NotBlank(message= "단체명을 입력해주세요.")
	private String companyName;
    
    @NotBlank(message= "대표명을 입력해주세요.")
	private String ceoName;
    
    @NotBlank(message= "사업자 주소를 입력해주세요.")
	private String companyAddress;
    
    @NotBlank(message= "고객센터 전화번호를 입력해주세요.")
	private String companyPhoneNumber;
    
    @NotBlank(message= "이메일을 입력해주세요.")
    @Email
	private String email;
    
	public GiveRegisterPage toGiveRegisterEntity(String filePath) {
		MultipartFile file = mainImgUrl;
		if(file == null) {
			return null;
		}
		String originFileName = file.getOriginalFilename();
		String extension = originFileName.substring(originFileName.lastIndexOf("."));
		String tempFileName = UUID.randomUUID().toString().replaceAll("-", "") + extension;
		Path uploadPath = Paths.get(filePath + "main/" + tempFileName);	// 경로/post/UUID.jpg
	
		File f = new File(filePath + "main");
		if(!f.exists()) {
			f.mkdirs();
		}
		
		try {
			Files.write(uploadPath, file.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return GiveRegisterPage.builder()
				.pageCategory(pageCategory)
				.detailCategory(detailCategory)
				.title(title)
				.storyTitle(storyTitle)
				.story(story)
				.goalTotal(goalTotal)
				.mainImgUrl(tempFileName)
				.endDate(endDate)
				.build();
	}
	
	public GivingSubImg togivingSubImgEntity(String filePath) {
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
		return GivingSubImg.builder()
				.subImgUrl(tempFileName)
				.pageCategory(pageCategory)
				.build();
	}
	
	public Center toCenterEntity() {
		return Center.builder()
				.pageCategory(pageCategory)
				.centerName(companyName)
				.centerAddress(companyAddress)
				.centerPhoneNumber(companyPhoneNumber)
				.centerCeo(ceoName)
				.build();
	}
	
	public TargetBenefit toTargetBenefitEntity() {
		return TargetBenefit.builder()
				.pageCategory(pageCategory)
				.target(target)
				.targetCount(targetCount)
				.benefitEffect(benefitEffect)
				.businessStartDate(businessStartDate)
				.businessEndDate(businessEndDate)
				.build();
	}
	
	public List<DonationUsePlan> toDonationUsePlanEntity() {
	    List<DonationUsePlan> donationUsePlans = new ArrayList<>();
	    for (int i = 0; i < giveUsing.size(); i++) {
	        String give = giveUsing.get(i);
	        int donation = donationExpense.get(i);
	        DonationUsePlan donationPlan = DonationUsePlan.builder()
	        		.pageCategory(pageCategory)
	        		.giveUsing(give)
	        		.donationExpense(donation)
	        		.build();
	        donationUsePlans.add(donationPlan);
	    }
	    return donationUsePlans;
	}
}














