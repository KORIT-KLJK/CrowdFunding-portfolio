package com.webproject.crowdfunding.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.exception.CustomException;
import com.webproject.crowdfunding.exception.ErrorMap;
import com.webproject.crowdfunding.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

	public final UserRepository signUpRepository;
	
	// iuejeong: 로그인 정보를 담고 있는 부분
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User userEntity = signUpRepository.findUserByEmail(email);
		if(userEntity == null) {
			throw new CustomException("로그인 실패", ErrorMap.builder().put("email", "사용자 정보를 확인하세요").build());
		}
		
		return userEntity.toPrincipal();
	}

}
