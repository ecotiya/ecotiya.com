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

  @DisplayName("testInsert From m_career")
  @Test
  public void testInsert() {
    MCareer entity = new MCareer();
    entity.setCareerDate("2030/05");
    entity.setCareerDivision("2");
    entity.setCareerTitle("テスト株式会社を創業");
    entity.setCareerContents("テスト株式会社を創業");

    assertEquals(1, mapper.insert(entity));
  }

  @DisplayName("testInsertSelective From m_career")
  @Test
  public void testInsertSelective() {
    MCareer entity = new MCareer();
    entity.setCareerDate("2030/05");
    entity.setCareerDivision("2");
    entity.setCareerTitle("テスト株式会社を創業");
    entity.setCareerContents("テスト株式会社を創業");

    assertEquals(1, mapper.insertSelective(entity));
  }

  @DisplayName("testSelectByPrimaryKey From m_career")
  @Test
  public void testSelectByPrimaryKey() {
    MCareer actual = mapper.selectByPrimaryKey("1995/02", "3");
    assertEquals("わたくし、誕生。", actual.getCareerTitle());
    assertEquals("大分県に生まれる。", actual.getCareerContents());
  }

  @DisplayName("testSelectAll From m_career")
  @Test
  public void testSelectAll() {
    List<MCareer> mCareers = mapper.selectAll();
    assertEquals(7, mCareers.size());
  }
}
