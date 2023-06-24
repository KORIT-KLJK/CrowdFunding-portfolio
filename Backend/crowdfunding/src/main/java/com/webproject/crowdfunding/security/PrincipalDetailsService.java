package com.webproject.crowdfunding.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

	private final UserRepository signUpRepository;
	
	// iuejeong: 로그인 정보를 담고 있는 부분
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User userEntity = signUpRepository.findUserByEmail(email);
		return userEntity.toPrincipal();
	}

}
