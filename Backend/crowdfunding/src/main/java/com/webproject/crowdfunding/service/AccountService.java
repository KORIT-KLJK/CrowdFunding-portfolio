package com.webproject.crowdfunding.service;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.PrincipalRespDto;
import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.repository.UserRepository;
import com.webproject.crowdfunding.security.PrincipalUserDetails;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountService {

	private final UserRepository signUpRepository;
	
	// iuejeong: 요청 받은 token에 대한 인증을 하기 위해 값을 넘겨준다.

	
	// iuejeong: 유저 정보에 대한 확인을 위한 검사 과정
	// iuejeong: db에 있는 email과 요청으로 받은 token을 열어서 그 email이 일치한지 알아본다.
	public PrincipalRespDto getPrincipal() {
		System.out.println(SecurityContextHolder.getContext().getAuthentication().getPrincipal().getClass());
		PrincipalUserDetails principalUserDetails = (PrincipalUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		User userEntity = signUpRepository.findUserByEmail(principalUserDetails.getEmail());
		StringBuilder roles = new StringBuilder();
		principalUserDetails.getAuthorities().forEach(authority -> {
			roles.append(authority.getAuthority() + ",");
		});
		roles.delete(roles.length() - 1, roles.length());
		
		return PrincipalRespDto.builder()
				.userId(userEntity.getUserId())
				.email(userEntity.getEmail())
				.name(userEntity.getName())
				.authorities(roles.toString())
				.build();
	}
	
}
