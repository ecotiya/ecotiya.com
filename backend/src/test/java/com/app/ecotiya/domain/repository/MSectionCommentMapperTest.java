package com.app.ecotiya.domain.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.Transactional;

import com.app.ecotiya.api.config.DbConfig;
import com.app.ecotiya.domain.entity.MSectionComment;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseMapperTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MSectionCommentMapperTest extends EcotiyaBaseMapperTest {

  @Autowired private MSectionCommentMapper mapper;

  @DisplayName("SELECT TEST: Check if all records retrieved.")
  @Test
  public void testSelectAll() {
    List<MSectionComment> mSectionComment = mapper.selectAll();
    assertEquals(2, mSectionComment.size());
  }
}
