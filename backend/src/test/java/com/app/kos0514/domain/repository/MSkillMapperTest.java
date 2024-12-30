package com.app.ecotiya.domain.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.Transactional;

import com.app.ecotiya.api.config.DbConfig;
import com.app.ecotiya.domain.entity.MSkill;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseMapperTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MSkillMapperTest extends EcotiyaBaseMapperTest {

  @Autowired private MSkillMapper mapper;

  @DisplayName("testInsert From m_skill")
  @Test
  public void testInsert() {
    MSkill entity = new MSkill();
    entity.setSkillFieldCode("DevOps");
    entity.setSkillName("Golang");
    entity.setCategory("プログラミング言語");
    entity.setSkillLevel(1);
    entity.setExperienceYm(BigDecimal.valueOf(0.5));

    assertEquals(1, mapper.insert(entity));
  }

  @DisplayName("testInsertSelective From m_skill")
  @Test
  public void testInsertSelective() {
    MSkill entity = new MSkill();
    entity.setSkillFieldCode("DevOps");
    entity.setSkillName("Golang");
    entity.setCategory("プログラミング言語");
    entity.setSkillLevel(1);
    entity.setExperienceYm(BigDecimal.valueOf(0.5));

    assertEquals(1, mapper.insertSelective(entity));
  }

  @DisplayName("testSelectByPrimaryKey From m_skill")
  @Test
  public void testSelectByPrimaryKey() {
    MSkill actual = mapper.selectByPrimaryKey("Backend", "Java");
    assertEquals("プログラミング言語", actual.getCategory());
    assertEquals(4, actual.getSkillLevel());
    assertEquals(BigDecimal.valueOf(4.0), actual.getExperienceYm());
  }

  @DisplayName("testSelectAll From m_skill")
  @Test
  public void testSelectAll() {
    List<MSkill> mCareers = mapper.selectAll();
    assertEquals(30, mCareers.size());
  }
}
