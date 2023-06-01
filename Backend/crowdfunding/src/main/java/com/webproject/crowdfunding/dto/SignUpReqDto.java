package com.webproject.crowdfunding.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.webproject.crowdfunding.entity.User;

import lombok.Data;

@Data
public class SignUpReqDto {
	@Email
	@NotBlank(message="이메일을 입력하세요")
	private String email;
	
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$",
			message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성")
	private String password;
	
	@Pattern(regexp = "^[가-힣]{2,7}$",
			message = "이름은 한글이름만 작성가능합니다.")
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
	
	public User toEntity() {
		return User.builder()
				.email(email)
				.password(new BCryptPasswordEncoder().encode(password))
				.name(name)
				.birthday(birthday)
				.gender(gender)
				.phoneNumber(phoneNumber)
				.build();
	}
}
