package com.app.ecotiya.domain.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.app.ecotiya.domain.entity.MSectionTitle;

@Mapper
public interface MSectionTitleMapper {

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_section_title
   *
   * @mbg.generated
   */
  int insert(MSectionTitle row);

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_section_title
   *
   * @mbg.generated
   */
  int insertSelective(MSectionTitle row);

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_section_title
   *
   * @mbg.generated
   */
  MSectionTitle selectByPrimaryKey(String sectionKindCode);

  /**
   * Select all records from database.
   *
   * @return all records stored in database
   */
  List<MSectionTitle> selectAll();
}