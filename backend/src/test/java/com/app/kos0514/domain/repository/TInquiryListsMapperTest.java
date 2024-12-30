package com.app.ecotiya.domain.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDateTime;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.Transactional;

import com.app.ecotiya.api.config.DbConfig;
import com.app.ecotiya.domain.entity.TInquiryLists;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseMapperTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class TInquiryListsMapperTest extends EcotiyaBaseMapperTest {

  @Autowired private TInquiryListsMapper mapper;

  @DisplayName("testInsert From t_inquiry_lists")
  @Test
  public void testInsert() {
    TInquiryLists entity = new TInquiryLists();
    entity.setUserName("ecotiya");
    entity.setMailAddress("ecotiya@ecotiya.com");
    entity.setInquiryKindCode("request");
    entity.setContents("送信テスト");
    entity.setCreateAt(LocalDateTime.now());

    assertEquals(1, mapper.insert(entity));
  }

  @DisplayName("testInsertSelective From t_inquiry_lists")
  @Test
  public void testInsertSelective() {
    TInquiryLists entity = new TInquiryLists();
    entity.setUserName("ecotiya");
    entity.setMailAddress("ecotiya@ecotiya.com");
    entity.setInquiryKindCode("request");
    entity.setContents("送信テスト");
    entity.setCreateAt(LocalDateTime.now());

    assertEquals(1, mapper.insertSelective(entity));
  }

  @DisplayName("testSelectByPrimaryKey From t_inquiry_lists")
  @Test
  public void testSelectByPrimaryKey() {
    TInquiryLists actual = mapper.selectByPrimaryKey(7l);
    assertEquals("ecotiya", actual.getUserName());
    assertEquals("ecotiya@ecotiya.com", actual.getMailAddress());
    assertEquals("official_site", actual.getInquiryKindCode());
    assertEquals("v", actual.getContents());
    assertEquals(LocalDateTime.of(2022, 07, 23, 01, 34, 42), actual.getCreateAt());
  }

  @DisplayName("testInsertReturnId From t_inquiry_lists")
  @Test
  public void testInsertReturnId() {
    TInquiryLists entity = new TInquiryLists();
    entity.setUserName("ecotiya");
    entity.setMailAddress("ecotiya@ecotiya.com");
    entity.setInquiryKindCode("official_site");
    entity.setContents("送信テストです。");
    entity.setCreateAt(LocalDateTime.now());

    assertEquals(1, mapper.insertReturnId(entity));
  }
}
