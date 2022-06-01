package com.app.ecotiya.domain.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.Transactional;

import com.app.ecotiya.api.config.DbConfig;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseMapperTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MSiteCommentMapperTest extends EcotiyaBaseMapperTest {

  //  @Autowired private MSiteCommentMapper mSiteCommentMapper;

  @DisplayName("SELECT TEST: Check if all records retrieved.")
  @Test
  public void testSelectAll() {
    //    List<MSiteComment> mSiteComments = mSiteCommentMapper.selectAll();
    //    assertEquals(4, mSiteComments.size());
  }
}
