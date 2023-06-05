package com.webproject.crowdfunding.service;

import java.util.Collections;
import java.util.Map;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.webproject.crowdfunding.dto.AddressReqDto;
import com.webproject.crowdfunding.dto.req.OAuth2ProviderMergeReqDto;
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
		OAuth2User oAuth2User = oAuth2UserService.loadUser(userRequest);
		
		String registrationId = userRequest.getClientRegistration().getRegistrationId();
		
		OAuth2Attribute oAuth2Attribute = OAuth2Attribute.of(registrationId, oAuth2User.getAttributes());
		
		Map<String, Object> attributes = oAuth2Attribute.convertToMap();
		
		return new DefaultOAuth2User(Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")), attributes, "email");
	}
	
	public int oauth2signUp(OAuth2SignUpReqDto oAuth2RegisterReqDto) {
		System.out.println(oAuth2RegisterReqDto);
		userEntity = oAuth2RegisterReqDto.toUserEntity();
		userRepository.signUpUser(userEntity);
		userRepository.saveAuthority(
				Authority.builder()
				.userId(userEntity.getUserId())
				.roleId(1)
				.build()
			);
		
		Address addressEntity = oAuth2RegisterReqDto.toAddressEntity();
		addressEntity.setUserId(userEntity.getUserId());
		return userRepository.saveAddress(addressEntity);
	}
	
	public boolean checkPassword(String email, String password) {
		userEntity = userRepository.findUserByEmail(email);
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		return passwordEncoder.matches(password, userEntity.getPassword());
	}
	
	public int oAuth2ProviderMerge(OAuth2ProviderMergeReqDto oAuth2ProviderMergeReqDto) { 
		userEntity = userRepository.findUserByEmail(oAuth2ProviderMergeReqDto.getEmail());
		
		String provider = oAuth2ProviderMergeReqDto.getProvider();
		if(StringUtils.hasText(userEntity.getProvider())) {
			userEntity.setProvider(userEntity.getProvider() + "," + provider);
		}else {
			userEntity.setProvider(provider);
		}
		
		return userRepository.updateProvider(userEntity);
	}

}
















