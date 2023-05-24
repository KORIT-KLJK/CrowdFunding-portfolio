package com.webproject.crowdfunding.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.webproject.crowdfunding.dto.req.GiverPaymentReqDto;
import com.webproject.crowdfunding.repository.GiverPaymentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GiverPaymentService {
	private final GiverPaymentRepository giverPaymentRepository;
	
	public int paymentGiver(@RequestBody GiverPaymentReqDto giverPaymentReqDto) {	
		return giverPaymentRepository.toGiverPayment(giverPaymentReqDto.toGiverPaymentEntity());
	}
}
