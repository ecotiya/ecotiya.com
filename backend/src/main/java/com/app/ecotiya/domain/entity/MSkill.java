package com.app.ecotiya.domain.entity;

import java.math.BigDecimal;

public class MSkill {

  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * m_skill.skill_id
   *
   * @mbg.generated
   */
  private Integer skillId;
  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * m_skill.skill_field_code
   *
   * @mbg.generated
   */
  private String skillFieldCode;
  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * m_skill.skill_name
   *
   * @mbg.generated
   */
  private String skillName;
  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * m_skill.experience_ym
   *
   * @mbg.generated
   */
  private BigDecimal experienceYm;

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column m_skill.skill_id
   *
   * @return the value of m_skill.skill_id
   * @mbg.generated
   */
  public Integer getSkillId() {
    return skillId;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column m_skill.skill_id
   *
   * @param skillId the value for m_skill.skill_id
   * @mbg.generated
   */
  public void setSkillId(Integer skillId) {
    this.skillId = skillId;
  }

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column m_skill.skill_field_code
   *
   * @return the value of m_skill.skill_field_code
   * @mbg.generated
   */
  public String getSkillFieldCode() {
    return skillFieldCode;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column m_skill.skill_field_code
   *
   * @param skillFieldCode the value for m_skill.skill_field_code
   * @mbg.generated
   */
  public void setSkillFieldCode(String skillFieldCode) {
    this.skillFieldCode = skillFieldCode == null ? null : skillFieldCode.trim();
  }

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column m_skill.skill_name
   *
   * @return the value of m_skill.skill_name
   * @mbg.generated
   */
  public String getSkillName() {
    return skillName;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column m_skill.skill_name
   *
   * @param skillName the value for m_skill.skill_name
   * @mbg.generated
   */
  public void setSkillName(String skillName) {
    this.skillName = skillName == null ? null : skillName.trim();
  }

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column m_skill.experience_ym
   *
   * @return the value of m_skill.experience_ym
   * @mbg.generated
   */
  public BigDecimal getExperienceYm() {
    return experienceYm;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column m_skill.experience_ym
   *
   * @param experienceYm the value for m_skill.experience_ym
   * @mbg.generated
   */
  public void setExperienceYm(BigDecimal experienceYm) {
    this.experienceYm = experienceYm;
  }

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_skill
   *
   * @mbg.generated
   */
  @Override
  public boolean equals(Object that) {
    if (this == that) {
      return true;
    }
    if (that == null) {
      return false;
    }
    if (getClass() != that.getClass()) {
      return false;
    }
    MSkill other = (MSkill) that;
    return (this.getSkillId() == null
            ? other.getSkillId() == null
            : this.getSkillId().equals(other.getSkillId()))
        && (this.getSkillFieldCode() == null
            ? other.getSkillFieldCode() == null
            : this.getSkillFieldCode().equals(other.getSkillFieldCode()))
        && (this.getSkillName() == null
            ? other.getSkillName() == null
            : this.getSkillName().equals(other.getSkillName()))
        && (this.getExperienceYm() == null
            ? other.getExperienceYm() == null
            : this.getExperienceYm().equals(other.getExperienceYm()));
  }

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * m_skill
   *
   * @mbg.generated
   */
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((getSkillId() == null) ? 0 : getSkillId().hashCode());
    result = prime * result + ((getSkillFieldCode() == null) ? 0 : getSkillFieldCode().hashCode());
    result = prime * result + ((getSkillName() == null) ? 0 : getSkillName().hashCode());
    result = prime * result + ((getExperienceYm() == null) ? 0 : getExperienceYm().hashCode());
    return result;
  }
}