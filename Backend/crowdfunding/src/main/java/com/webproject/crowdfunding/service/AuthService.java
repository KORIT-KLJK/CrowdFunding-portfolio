package com.webproject.crowdfunding.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webproject.crowdfunding.dto.req.FunderReqDto;
import com.webproject.crowdfunding.dto.req.GiverPaymentReqDto;
import com.webproject.crowdfunding.entity.Funder;
import com.webproject.crowdfunding.repository.AuthRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
	
	private final AuthRepository authRepository;
	
	public int saveFunder(FunderReqDto funderReqDto) {
		List<Funder> funderEntity = funderReqDto.toFunderEntity();
		return authRepository.toSaveFunder(funderEntity);
	}

	public int paymentGiver(GiverPaymentReqDto giverPaymentReqDto) {	
		return authRepository.toGiverPayment(giverPaymentReqDto.toGiverPaymentEntity());
	}
	
}
