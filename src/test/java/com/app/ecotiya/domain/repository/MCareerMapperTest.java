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
import com.app.ecotiya.domain.entity.MCareer;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseMapperTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MCareerMapperTest extends EcotiyaBaseMapperTest {

  @Autowired private MCareerMapper mapper;

  @DisplayName("SELECT TEST: Check if all records retrieved.")
  @Test
  public void testSelectAll() {
    List<MCareer> mCareers = mapper.selectAll();
    assertEquals(9, mCareers.size());
  }
}
