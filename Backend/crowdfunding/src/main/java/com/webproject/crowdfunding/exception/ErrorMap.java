package com.webproject.crowdfunding.exception;

import java.util.HashMap;
import java.util.Map;


public class ErrorMap { 
	
	private Map<String, String> errorMap;
	private ErrorMap() {
		errorMap = new HashMap<>();
	}	
	// code8144: builder 메소드가 호출이되면 errorMap을 new로 생성 -> 생성자에서 비어있는 new Map이 생성
	// code8144: 비어있는 메소드에 put으로 key, value를 넣을 수 있음 , this는 errorMap 자기자신 
	// code8144: map을 만들지 않고도 맵을 생성가능
	public static ErrorMap builder(){
		return new ErrorMap();
	}
	public ErrorMap put(String key, String value) {
		errorMap.put(key, value);
		return this;
	}
	
	public Map<String, String> build(){
		return errorMap;
	}
	

}
