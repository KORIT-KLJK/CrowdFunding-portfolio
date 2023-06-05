package com.webproject.crowdfunding.service;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.AddressReqDto;
import com.webproject.crowdfunding.dto.SignUpReqDto;
import com.webproject.crowdfunding.entity.Address;
import com.webproject.crowdfunding.entity.Authority;
import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.exception.CustomException;
import com.webproject.crowdfunding.exception.ErrorMap;
import com.webproject.crowdfunding.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SignUpService {
	
	private final UserRepository signUpRepository;
	private User userEntity;
	
	 public void duplicatedEmail(String email) {
		 System.out.println("중복 이메일 확인2: " + email);
		if(signUpRepository.findUserByEmail(email) != null) {
			throw new CustomException("Duplicated Email", 
					ErrorMap.builder()
					.put("email", "사용 중인 email입니다.")
					.build());
		}
	}
	 
	
	public int signUp(SignUpReqDto signUpReqDto) {
		userEntity = signUpReqDto.toUserEntity();
		signUpRepository.signUpUser(userEntity);

		signUpRepository.saveAuthority(
				Authority.builder()
				.userId(userEntity.getUserId())
				.roleId(1)
				.build());
		
		Address addressEntity = signUpReqDto.toAddressEntity();
		addressEntity.setUserId(userEntity.getUserId());
		
		
		return signUpRepository.saveAddress(addressEntity);
	}
	
}
