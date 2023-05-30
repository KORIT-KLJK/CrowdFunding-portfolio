package com.webproject.crowdfunding.config;

import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

// code8144: controller에서 rossOrigin 없애도 되는 방법, 이게 없으면 일일이 @CrossOrigin이 필요함 
@Configuration
public class WebMvcConfig implements WebMvcConfigurer{
	
	@Value("${file.path}")
	private String filePath;
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") // code8144: 3000포트에서 들어오는 모든 요청들 
				.allowedMethods("*")
				.allowedOrigins("*");
				//.allowedOrigins("http://localhost:3000");	
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		WebMvcConfigurer.super.addResourceHandlers(registry);
		registry.addResourceHandler("/image/**")
				.addResourceLocations("file:///" + filePath)
				.resourceChain(true)
				.addResolver(new PathResourceResolver() {
					@Override
					protected Resource getResource(String resourcePath, Resource location) throws IOException {
						resourcePath = URLDecoder.decode(resourcePath, StandardCharsets.UTF_8);
						return super.getResource(resourcePath, location);
					}
				});
	}
	
}
