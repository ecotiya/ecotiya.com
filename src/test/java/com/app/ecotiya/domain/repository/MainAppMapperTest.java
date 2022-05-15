package com.app.ecotiya.domain.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.Transactional;

import com.app.ecotiya.api.config.DbConfig;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MainAppMapperTest extends EcotiyaBaseTest {

  @Autowired private MSiteCommentMapper mSiteCommentMapper;
  @Autowired private MCareerMapper mCareerMapper;
}
