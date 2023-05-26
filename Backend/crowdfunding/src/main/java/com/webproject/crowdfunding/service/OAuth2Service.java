package com.webproject.crowdfunding.service;

import java.util.Collections;
import java.util.Map;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.AddressReqDto;
import com.webproject.crowdfunding.dto.req.OAuth2SignUpReqDto;
import com.webproject.crowdfunding.entity.Address;
import com.webproject.crowdfunding.entity.Authority;
import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.repository.UserRepository;
import com.webproject.crowdfunding.security.OAuth2Attribute;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OAuth2Service implements OAuth2UserService<OAuth2UserRequest, OAuth2User>{
	
	private final UserRepository userRepository;
	private User userEntity;

	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService = new DefaultOAuth2UserService();
		OAuth2User oAuth2User = oAuth2UserService.loadUser(userRequest);	// oAuth2User에는 방금 로그인한 user 정보가 들어가있다.
		
		System.out.println(oAuth2User.getAttributes());
		String registrationId = userRequest.getClientRegistration().getRegistrationId();	// providerName(google, naver, kakao)
		
		// oAuth2User.getAttributes()는 User Attrivute 내용을 map으로 모두 전달함.
		OAuth2Attribute oAuth2Attribute = OAuth2Attribute.of(registrationId, oAuth2User.getAttributes());
		
		Map<String, Object> attributes = oAuth2Attribute.convertToMap();
		
		// 아래 코드는 Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")을 풀어서 쓴 것
//		ArrayList<SimpleGrantedAuthority> authorities = new ArrayList<>();
//		authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
		
		// 권한 설정, 통일 시킨 attribute 정보를 map의 상태로, key값(email or 아이디 상관 없음)
		// return이 되면 인증이 성공이 되는 것
		return new DefaultOAuth2User(Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")), attributes, "email");
	}
	
	public int oauth2signUp(OAuth2SignUpReqDto oAuth2RegisterReqDto) {
		userEntity = oAuth2RegisterReqDto.toEntity();
		
		userRepository.signUpUser(userEntity);
		return userRepository.saveAuthority(
				Authority.builder()
				.userId(userEntity.getUserId())
				.roleId(1)
				.build()
			);
	}
	
	public void address(AddressReqDto addressReqDto) {
		Address addressEntity = addressReqDto.toEntity();
		addressEntity.setUserId(userEntity.getUserId());
		userRepository.saveAddress(addressEntity);
	}

}
















