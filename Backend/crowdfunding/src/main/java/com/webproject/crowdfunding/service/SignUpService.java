package com.webproject.crowdfunding.service;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.SignUpReqDto;
import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.repository.SignUpRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SignUpService {
	
	private SignUpRepository signUpRepository;
	
	public void signUp(SignUpReqDto signUpReqDto) {
		User userEntity = signUpReqDto.toEntity();
		signUpRepository.signUpUser(userEntity);
	}
	
}
