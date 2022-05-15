package com.app.ecotiya.domain.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.app.ecotiya.domain.entity.MSiteComment;

@Mapper
public interface MSiteCommentMapper {
  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_site_comment
   *
   * @mbg.generated
   */
  int deleteByPrimaryKey(String comentKindCode);

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_site_comment
   *
   * @mbg.generated
   */
  int insert(MSiteComment row);

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_site_comment
   *
   * @mbg.generated
   */
  int insertSelective(MSiteComment row);

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_site_comment
   *
   * @mbg.generated
   */
  MSiteComment selectByPrimaryKey(String comentKindCode);

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_site_comment
   *
   * @mbg.generated
   */
  int updateByPrimaryKeySelective(MSiteComment row);

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_site_comment
   *
   * @mbg.generated
   */
  int updateByPrimaryKeyWithBLOBs(MSiteComment row);

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_site_comment
   *
   * @mbg.generated
   */
  int updateByPrimaryKey(MSiteComment row);

  /**
   * Select all records from database.
   *
   * @return all records stored in database
   */
  List<MSiteComment> selectAll();
}
