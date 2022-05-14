package com.app.ecotiya;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.app.ecotiya.domain.entity.base.BaseEntityInterceptor;

@Configuration
public class MyBatisConfig {

  @Bean
  public BaseEntityInterceptor baseEntityInterceptor() {
    return new BaseEntityInterceptor();
  }
}
