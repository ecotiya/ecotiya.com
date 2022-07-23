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
import com.app.ecotiya.domain.entity.MInquiryKinds;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseMapperTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MInquiryKindsMapperTest extends EcotiyaBaseMapperTest {

  @Autowired private MInquiryKindsMapper mapper;

  @DisplayName("INSERT TEST: Check if the data is inserted as expected.")
  @Test
  public void testInsert() {
    List<MInquiryKinds> mInquiryKinds = mapper.selectAll();
    assertEquals(3, mInquiryKinds.size());
  }
}
