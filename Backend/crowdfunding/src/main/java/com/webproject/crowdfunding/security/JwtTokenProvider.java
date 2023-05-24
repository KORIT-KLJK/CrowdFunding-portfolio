package com.webproject.crowdfunding.security;

import java.security.Key;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.webproject.crowdfunding.dto.JwtRespDto;
import com.webproject.crowdfunding.entity.User;
import com.webproject.crowdfunding.exception.CustomException;
import com.webproject.crowdfunding.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtTokenProvider {
	@Autowired
	private UserRepository userRepository;
	private final Key key;

	public JwtTokenProvider(@Value("${jwt.secret}") String secretKey) {	// iuejeong: @Component일 때 사용 가능. 아까 설정해둔 yml의 key값이 매개변수로 들어간다
		key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secretKey));
	}

	public JwtRespDto generateToken(Authentication authentication) {
		System.out.println(authentication);
		StringBuilder builder = new StringBuilder();
		authentication.getAuthorities().forEach(authority -> {
			builder.append(authority.getAuthority() + ","); // code8144, iuejeong: 문자열 사용가능, role이 하나씩 나온다.

		});

		builder.delete(builder.length() - 1, builder.length());	// iuejeong: ~부터 ~까지 지워라. 쉼표를 지우기 위해 씀

		String authorities = builder.toString();	// iuejeong: role 권한들을 문자열로 바꾸기 위해서

		Date tokenExpiresDate = new Date(new Date().getTime() + (1000 * 60 * 60 * 24)); // 현재시간 + 하루

		String accessToken = Jwts.builder()
				.setSubject(authentication.getName()) // code8144: 토큰의 제목(큰이름), getName() = email
				.claim("auth", authorities) // code8144: claim은 토큰 정보를 표현하기 위해 이미 정해진 종류의 데이터들로
											// code8144: 모두 선택적으로 작성이 가능하며 사용할 것을 권장한다.
											// code8144: 또한 JWT를 간결하게 하기 위해 key는 모두 길이 3의 String이다. 여기서 subject로는 unique한 값을 사용하는데, 사용자 이메일을 주로 사용한다.
				
				.setExpiration(tokenExpiresDate) // code8144: 토큰의 만료기간
				.signWith(key, SignatureAlgorithm.HS256) // code8144: 토큰 암호화
				.compact();

		return JwtRespDto.builder().grantType("Bearer").accessToken(accessToken).build();	// iuejeong: 이후 controller가 받는다.

	}

	// iuejeong: Bearer를 뗀 토큰 값을 풀어서 검사함.
	public boolean validateToken(String token) {
		try {
			Jwts.parserBuilder()	// iuejeong: Jwt 형태를 Json이 아닌 java 형태로 쓰겠다
			.setSigningKey(key)		// iuejeong: token이 만들어진 key로 되어있는지 확인
			.build()
			.parseClaimsJws(token); // iuejeong: 유효성 검사

			return true;
		// iuejeong: Security 라이브러리에 오류가 있거나, JSON의 format이 잘못된 형식의 JWT가 들어왔을 때 예외
		}catch (SecurityException | MalformedJwtException e) {
		}catch (ExpiredJwtException e) { 		// code8144: 토큰이 만료된 경우 발생하는 에러
		}catch(UnsupportedJwtException e) {
		}catch(IllegalArgumentException e) {   	// code8144: Arg가 없을 때 발생하는 에러 
		}catch(Exception e) {

		}
		
		// iuejeong: 예외가 일어나면 인증되지 않았다, 쓸 수 없는 토큰이다
		return false;

	}
	// iuejeong: 요청할 때 토큰을 Bearer ~~~~~~~~~~라는 값으로 보내는데, 토큰값만 넘겨주기 위해 앞에 Bearer를 잘라주는 과정.
	public String getToken(String token) {
		String type = "Bearer ";
		if(StringUtils.hasText(token) && token.startsWith(type)) {
			return token.substring(type.length());
			
		}
		return null;
		
	}
	public Claims getClaims(String token) {
		return Jwts.parserBuilder()
				.setSigningKey(key)
				.build()
				.parseClaimsJws(token)
				.getBody();
	}
	
	public Authentication getAuthentication(String accessToken) {
		Authentication authentication = null;
		
		Claims claims = getClaims(accessToken);	// iuejeong: Claims 통째로 들고오기
//		if(claims.get("auth") == null) {	// iuejeong: 회원가입 때부터 잘못됨.(ROLE_USER 등 아무것도 안 들어감)
//			throw new CustomException("AccessToken에 권한 정보가 없습니다.");
//		}
//		
//		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
//		
//		String auth = claims.get("auth").toString();
//		
//		for(String role : auth.split(",")) {
//			authorities.add(new SimpleGrantedAuthority(role));	// iuejeong: 권한이 있는 것들을 authorities에 담기
//		}
		
		// iuejeong: Spring에서 기본적으로 지원해주는 UserDedatils임
		// iuejeong: new User(username, password, 권한) == PrincipalDetails
		// iuejeong: password는 공개되면 안 되기 때문에 공백이다
		User user = userRepository.findUserByEmail(claims.getSubject());
		PrincipalUserDetails principalUserDetails = user.toPrincipal();
		
		// iuejeong: new UsernamePasswordAuthenticationToken(User객체, 자격 증명 객체(SSL 등 회사든 공공에서든 인증서가 필요할 때. https에서 증명할 때 쓰임), 권한)
		// iuejeong: return하면 업캐스팅이 돼서 Authentication 객체가 된다. UsernamePasswordAuthenticationToken를 타고 들어가면 Authentication을 implement 하고 있다.
		// iuejeong: 임시의 Authentication 객체가 생성
		authentication = new UsernamePasswordAuthenticationToken(principalUserDetails, null, principalUserDetails.getAuthorities());
		return authentication;
	}
}
