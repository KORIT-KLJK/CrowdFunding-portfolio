package com.webproject.crowdfunding.aop;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Retention(RUNTIME)	// iuejeong: 해당 메소드가 실행이 되면 어노테이션을 적용시킴.
@Target(METHOD)	// iuejeong: 메소드에 다는 어노테이션. class에다 하고 싶으면 ElementType을 TYPE으로, 변수에다 하고 싶으면 Field 등
public @interface ValidAspect {

}
