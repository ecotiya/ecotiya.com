package com.app.kos0514.domain.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.Transactional;

import com.app.kos0514.api.config.DbConfig;
import com.app.kos0514.domain.entity.MInquiryKinds;
import com.app.kos0514.domain.repository.base.kos0514BaseMapperTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MInquiryKindsMapperTest extends kos0514BaseMapperTest {

  @Autowired private MInquiryKindsMapper mapper;

  @DisplayName("testInsert From m_inquiry_kinds")
  @Test
  public void testInsert() {
    MInquiryKinds entity = new MInquiryKinds();
    entity.setInquiryKindCode("test");
    entity.setInquiryKindName("登録テスト");
    entity.setSortno(6);

    assertEquals(1, mapper.insert(entity));
  }

  @DisplayName("testInsertSelective From m_inquiry_kinds")
  @Test
  public void testInsertSelective() {
    MInquiryKinds entity = new MInquiryKinds();
    entity.setInquiryKindCode("test");
    entity.setInquiryKindName("登録テスト");
    entity.setSortno(6);

    assertEquals(1, mapper.insertSelective(entity));
  }

  @DisplayName("testSelectByPrimaryKey From m_inquiry_kinds")
  @Test
  public void testSelectByPrimaryKey() {
    MInquiryKinds actual = mapper.selectByPrimaryKey("about_work");
    assertEquals("お仕事について", actual.getInquiryKindName());
    assertEquals(1, actual.getSortno());
  }

  @DisplayName("testSelectAll From m_inquiry_kinds")
  @Test
  public void testSelectAll() {
    List<MInquiryKinds> mInquiryKinds = mapper.selectAll();
    assertEquals(5, mInquiryKinds.size());
  }
}
