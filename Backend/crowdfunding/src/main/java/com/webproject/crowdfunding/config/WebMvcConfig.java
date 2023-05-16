package com.webproject.crowdfunding.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// code8144: controller에서 rossOrigin 없애도 되는 방법, 이게 없으면 일일이 @CrossOrigin이 필요함 
@Configuration
public class WebMvcConfig implements WebMvcConfigurer{
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") // code8144: 3000포트에서 들어오는 모든 요청들 
				.allowedMethods("*")
				.allowedOrigins("*");
				//.allowedOrigins("http://localhost:3000");	
	}
	
}
