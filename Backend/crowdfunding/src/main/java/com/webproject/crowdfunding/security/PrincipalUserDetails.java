package com.webproject.crowdfunding.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.webproject.crowdfunding.entity.Authority;

public class PrincipalUserDetails implements UserDetails{

	private static final long serialVersionUID = -8654755481982862798L;
	
	private int userId;
	private String email;
	private String password;
	private List<Authority> roles;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		roles.forEach(role -> {
			authorities.add(new SimpleGrantedAuthority(role.getRole().getRoleName()));
		});
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
