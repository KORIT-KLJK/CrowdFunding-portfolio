package com.webproject.crowdfunding.security;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler{
	private final UserRepository userRepository;
	private final JwtTokenProvider jwtTokenProvider;	
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
		System.out.println("oAuth2User: " + oAuth2User);
		String email = oAuth2User.getAttribute("email");
		String provider = oAuth2User.getAttribute("provider");
		User userEntity = userRepository.findUserByEmail(email);
		System.out.println("userEntity: " + userEntity);
		
		if(userEntity == null) {
			String registerToken = jwtTokenProvider.generateToken(authentication).toString();
			String name = oAuth2User.getAttribute("name");
			response
			.sendRedirect(
					"http://localhost:3000/auth/oauth2/register"
							+ "?registerToken=" + registerToken
							+ "&email=" + email
							+ "&name=" + URLEncoder.encode(name, "UTF-8")
							+ "&provider=" + provider
			);
		}else {
			if(StringUtils.hasText(userEntity.getProvider())) {
				if(!userEntity.getProvider().contains(provider)) {
					response.sendRedirect(
							"http://localhost:3000/auth/oauth2/merge"
					 			 	+ "?provider=" + provider
									+ "&email=" + email);
					return;
				}
				
				response.sendRedirect("http://localhost:3000/auth/oauth2/login"
				 			 	+ "?accessToken=" + jwtTokenProvider.generateToken(authentication));
				
			}else {
				response.sendRedirect(
						"http://localhost:3000/auth/oauth2/merge"
				 			 	+ "?provider=" + provider
								+ "&email=" + email);
			}
		}
		
	}
}

