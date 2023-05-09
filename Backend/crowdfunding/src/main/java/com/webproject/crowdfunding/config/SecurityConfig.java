package com.webproject.crowdfunding.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.webproject.crowdfunding.security.JwtAuthenticationEntryPoint;
import com.webproject.crowdfunding.security.JwtAuthenticationFilter;
import com.webproject.crowdfunding.security.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor

//	code8144: Spring Security 처리 과정 요약
// 1. 사용자가 아이디 비밀번호로 로그인을 요청함
// 2. AuthenticationFilter에서 UsernamePasswordAuthenticationToken을 생성하여 AuthenticaionManager에게 전달
// 3. AuthenticaionManager는 등록된 Provider(들)을 조회하여 인증을 요구함
// 4. Provider는 UserDetailsService를 통해 입력받은 아이디에 대한 사용자 정보를 DB에서 조회함
// 5. 입력받은 비밀번호를 암호화하여 DB의 비밀번호화 매칭되는 경우 인증이 성공된 AuthenticationToken을 생성하여 AuthenticationManager로 반환함
// 6. AuthenticaionManager는AuthenticaionToken을 AuthenticationFilter로 전달함
// 7. JwtAuthenticationFilter는 전달받은 JwtTokenProvider을 LoginSuccessHandler로 전송하고, 토큰을 response의 헤더에 추가하여 반환함

public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	private final JwtTokenProvider jwtTokenProvider;
	private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors();
		http.csrf().disable();
		http.httpBasic().disable();
		http.formLogin().disable();	// code8144: form 기반의 로그인에 대해 비활성화 한다.
		
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.authorizeRequests()
			.antMatchers("/**")
			.permitAll() // code8144: 토큰을 활용하는 경우 모든 요청에 대해 접근이 가능하도록 함
			.anyRequest()
			.authenticated()
			.and() // code8144: 토큰을 활용하면 세션이 필요가 없으므로 STATELESS로 설정하여 Session을 사용하지 않는다
			.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class)
			.exceptionHandling()
			.authenticationEntryPoint(jwtAuthenticationEntryPoint);
		
	}
}
