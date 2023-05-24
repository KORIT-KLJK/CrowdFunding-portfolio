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
		System.out.println(email);
		if(signUpRepository.findUserByEmail(email) != null) {
			throw new CustomException("Duplicated Email", 
					ErrorMap.builder()
					.put("email", "사용 중인 email입니다.")
					.build());
		}
	}
	 
	
	public void signUp(SignUpReqDto signUpReqDto) {
		// iuejeong: dto에서 받은 정보들을 User 객체로 값을 넘겨야 하기 때문에 변환을 해서 저장소로 넘긴다.
		userEntity = signUpReqDto.toEntity();
		Address address = new Address();
		signUpRepository.signUpUser(userEntity);
		
		// iuejeong: 회원가입과 동시에 권한까지 저장소로 넘긴다.
		signUpRepository.saveAuthority(
				Authority.builder()
				.userId(userEntity.getUserId())
				.roleId(1)
				.build());
	}
	
	public void address(AddressReqDto addressReqDto) {
		System.out.println(addressReqDto);
		System.out.println(userEntity.getUserId());
		Address addressEntity = addressReqDto.toEntity();
		addressEntity.setUserId(userEntity.getUserId());
		signUpRepository.saveAddress(addressEntity);
	}
	
}
