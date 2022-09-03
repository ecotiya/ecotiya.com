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

  @DisplayName("testInsert From m_section_comment")
  @Test
  public void testInsert() {
    MSectionComment entity = new MSectionComment();
    entity.setSectionKindCode("test");
    entity.setSectionCommentLine(1);
    entity.setSectionComment("登録テストです。");
    entity.setTitleFlg(false);

    assertEquals(1, mapper.insert(entity));
  }

  @DisplayName("testInsertSelective From m_section_comment")
  @Test
  public void testInsertSelective() {
    MSectionComment entity = new MSectionComment();
    entity.setSectionKindCode("test");
    entity.setSectionCommentLine(1);
    entity.setSectionComment("登録テストです。");
    entity.setTitleFlg(false);

    assertEquals(1, mapper.insertSelective(entity));
  }

  @DisplayName("testSelectByPrimaryKey From m_section_comment")
  @Test
  public void testSelectByPrimaryKey() {
    MSectionComment actual = mapper.selectByPrimaryKey("career", 1);
    assertEquals("社会における小さな課題を解決できるエンジニアになる。", actual.getSectionComment());
    assertEquals(true, actual.getTitleFlg());
  }

  @DisplayName("testSelectAll From m_section_comment")
  @Test
  public void testSelectAll() {
    List<MSectionComment> mSectionComment = mapper.selectAll();
    assertEquals(8, mSectionComment.size());
  }
}
