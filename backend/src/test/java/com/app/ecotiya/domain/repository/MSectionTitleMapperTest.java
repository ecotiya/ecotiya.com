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
import com.app.ecotiya.domain.entity.MSectionTitle;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseMapperTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MSectionTitleMapperTest extends EcotiyaBaseMapperTest {

  @Autowired private MSectionTitleMapper mapper;

  @DisplayName("testInsert From m_section_title")
  @Test
  public void testInsert() {
    MSectionTitle entity = new MSectionTitle();
    entity.setSectionKindCode("test");
    entity.setSectionTitle("【テスト】");
    entity.setSectionSubTitle("登録テストです。");
    entity.setRemarks1(null);
    entity.setRemarks2(null);
    entity.setShowFlg(false);

    assertEquals(1, mapper.insert(entity));
  }

  @DisplayName("testInsertSelective From m_section_title")
  @Test
  public void testInsertSelective() {
    MSectionTitle entity = new MSectionTitle();
    entity.setSectionKindCode("test");
    entity.setSectionTitle("【テスト】");
    entity.setSectionSubTitle("登録テストです。");
    entity.setRemarks1(null);
    entity.setRemarks2(null);
    entity.setShowFlg(false);

    assertEquals(1, mapper.insertSelective(entity));
  }

  @DisplayName("testSelectByPrimaryKey From m_section_title")
  @Test
  public void testSelectByPrimaryKey() {
    MSectionTitle actual = mapper.selectByPrimaryKey("career");
    assertEquals("【経歴】", actual.getSectionTitle());
    assertEquals("エンジニア人生を開始してから、今日までの歩みです。ぜひ、ご覧ください。", actual.getSectionSubTitle());
    assertEquals("", actual.getRemarks1());
    assertEquals("", actual.getRemarks2());
    assertEquals(true, actual.getShowFlg());
  }

  @DisplayName("testSelectAll From m_section_title")
  @Test
  public void testSelectAll() {
    List<MSectionTitle> mSectionTitle = mapper.selectAll();
    assertEquals(4, mSectionTitle.size());
  }
}
