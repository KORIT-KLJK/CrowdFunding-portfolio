package com.webproject.crowdfunding.security;

import java.util.HashMap;
import java.util.Map;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@ToString
@Builder(access = AccessLevel.PRIVATE)	// 생성자 자체가 private이 됨
@Getter
public class OAuth2Attribute {
	// attribute 정보를 아래 3개로 통일을 시킴
    private Map<String, Object> attributes;
    private String email;
    private String name;
    private String provider;

    public static OAuth2Attribute of(String provider, Map<String, Object> attributes) {
        switch (provider) {
            case "google":
                return ofGoogle(provider, attributes);
            case "kakao":
                return ofKakao(provider, attributes);
            case "naver":
                return ofNaver(provider, attributes);
            default:
                throw new RuntimeException();
        }
    }

    // google, kakao, naver를 나눈 이유는 세 개 다 attribute의 구조가 다르다
    // google은 attribute 안에 내용이 다 들어 있음.
    private static OAuth2Attribute ofGoogle(String provider, Map<String, Object> attributes) {
        return OAuth2Attribute.builder()
                .name((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                .provider((String) provider)
                .attributes(attributes)
                .build();
    }

    // map 안에 map이 있음
    private static OAuth2Attribute ofKakao(String provider, Map<String, Object> attributes) {
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> kakaoProfile = (Map<String, Object>) kakaoAccount.get("profile");

        return OAuth2Attribute.builder()
                .name((String) kakaoProfile.get("nickname"))
                .email((String) kakaoAccount.get("email"))
                .provider((String) provider)
                .attributes(kakaoAccount)
                .build();
    }

    private static OAuth2Attribute ofNaver(String provider, Map<String, Object> attributes) {
        Map<String, Object> response = (Map<String, Object>) attributes.get("response");

        return OAuth2Attribute.builder()
                .name((String) response.get("name"))
                .email((String) response.get("email"))
                .provider((String) provider)
                .attributes(response)
                .build();
    }

    public Map<String, Object> convertToMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("name", name);
        map.put("email", email);
        map.put("provider", provider);

        return map;
    }
}

