package com.webproject.crowdfunding.dto.req;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.webproject.crowdfunding.entity.Address;
import com.webproject.crowdfunding.entity.User;

import lombok.Data;

@Data
public class OAuth2SignUpReqDto {
	private String email;
	
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$",
			message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성")
	private String password;
	
	private String name;
	
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$",
            message = "생년월일을 형식에 맞게 작성해주세요.")
	private String birthday;
    
    @Pattern(regexp = "^(male|female)$",
            message = "성별을 체크해주세요.")
	private String gender;
    
    @Pattern(regexp = "^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$",
    		message = "휴대전화번호 형식에 맞게 작성해주세요.")
    private String phoneNumber;
    private String provider;
    
	@NotBlank(message = "우편번호는 필수 입력 값입니다.")
	private String zonecode;
	
	@NotBlank(message = "주소는 필수 입력 값입니다.")
	private String address;
	
	private String buildingName;
	private String bname;
	
	@NotBlank(message = "상세 주소는 필수 입력 값입니다.")
	private String detailAddress;
	
	private String addressType;
	
	public User toUserEntity() {
		return User.builder()
				.email(email)
				.password(new BCryptPasswordEncoder().encode(password))
				.name(name)
				.birthday(birthday)
				.gender(gender)
				.phoneNumber(phoneNumber)
				.provider(provider)
				.build();
	}
	
	public Address toAddressEntity() {
		return Address.builder()
				.zonecode(zonecode)
				.address(address)
				.buildingName(buildingName)
				.bname(bname)
				.detailAddress(detailAddress)
				.addressType(addressType)
				.build();
	}
}













