package com.app.ecotiya.domain.entity;

import java.time.LocalDateTime;

public class TInquiryLists {

  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * t_inquiry_lists.inquiry_id
   *
   * @mbg.generated
   */
  private Long inquiryId;
  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * t_inquiry_lists.user_name
   *
   * @mbg.generated
   */
  private String userName;
  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * t_inquiry_lists.mail_address
   *
   * @mbg.generated
   */
  private String mailAddress;
  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * t_inquiry_lists.inquiry_kind_code
   *
   * @mbg.generated
   */
  private String inquiryKindCode;
  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * t_inquiry_lists.create_at
   *
   * @mbg.generated
   */
  private LocalDateTime createAt;
  /**
   * This field was generated by MyBatis Generator. This field corresponds to the database column
   * t_inquiry_lists.contents
   *
   * @mbg.generated
   */
  private String contents;

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column t_inquiry_lists.inquiry_id
   *
   * @return the value of t_inquiry_lists.inquiry_id
   * @mbg.generated
   */
  public Long getInquiryId() {
    return inquiryId;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column t_inquiry_lists.inquiry_id
   *
   * @param inquiryId the value for t_inquiry_lists.inquiry_id
   * @mbg.generated
   */
  public void setInquiryId(Long inquiryId) {
    this.inquiryId = inquiryId;
  }

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column t_inquiry_lists.user_name
   *
   * @return the value of t_inquiry_lists.user_name
   * @mbg.generated
   */
  public String getUserName() {
    return userName;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column t_inquiry_lists.user_name
   *
   * @param userName the value for t_inquiry_lists.user_name
   * @mbg.generated
   */
  public void setUserName(String userName) {
    this.userName = userName == null ? null : userName.trim();
  }

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column t_inquiry_lists.mail_address
   *
   * @return the value of t_inquiry_lists.mail_address
   * @mbg.generated
   */
  public String getMailAddress() {
    return mailAddress;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column t_inquiry_lists.mail_address
   *
   * @param mailAddress the value for t_inquiry_lists.mail_address
   * @mbg.generated
   */
  public void setMailAddress(String mailAddress) {
    this.mailAddress = mailAddress == null ? null : mailAddress.trim();
  }

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column t_inquiry_lists.inquiry_kind_code
   *
   * @return the value of t_inquiry_lists.inquiry_kind_code
   * @mbg.generated
   */
  public String getInquiryKindCode() {
    return inquiryKindCode;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column t_inquiry_lists.inquiry_kind_code
   *
   * @param inquiryKindCode the value for t_inquiry_lists.inquiry_kind_code
   * @mbg.generated
   */
  public void setInquiryKindCode(String inquiryKindCode) {
    this.inquiryKindCode = inquiryKindCode == null ? null : inquiryKindCode.trim();
  }

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column t_inquiry_lists.create_at
   *
   * @return the value of t_inquiry_lists.create_at
   * @mbg.generated
   */
  public LocalDateTime getCreateAt() {
    return createAt;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column t_inquiry_lists.create_at
   *
   * @param createAt the value for t_inquiry_lists.create_at
   * @mbg.generated
   */
  public void setCreateAt(LocalDateTime createAt) {
    this.createAt = createAt;
  }

  /**
   * This method was generated by MyBatis Generator. This method returns the value of the database
   * column t_inquiry_lists.contents
   *
   * @return the value of t_inquiry_lists.contents
   * @mbg.generated
   */
  public String getContents() {
    return contents;
  }

  /**
   * This method was generated by MyBatis Generator. This method sets the value of the database
   * column t_inquiry_lists.contents
   *
   * @param contents the value for t_inquiry_lists.contents
   * @mbg.generated
   */
  public void setContents(String contents) {
    this.contents = contents == null ? null : contents.trim();
  }

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * t_inquiry_lists
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
    TInquiryLists other = (TInquiryLists) that;
    return (this.getInquiryId() == null
            ? other.getInquiryId() == null
            : this.getInquiryId().equals(other.getInquiryId()))
        && (this.getUserName() == null
            ? other.getUserName() == null
            : this.getUserName().equals(other.getUserName()))
        && (this.getMailAddress() == null
            ? other.getMailAddress() == null
            : this.getMailAddress().equals(other.getMailAddress()))
        && (this.getInquiryKindCode() == null
            ? other.getInquiryKindCode() == null
            : this.getInquiryKindCode().equals(other.getInquiryKindCode()))
        && (this.getCreateAt() == null
            ? other.getCreateAt() == null
            : this.getCreateAt().equals(other.getCreateAt()))
        && (this.getContents() == null
            ? other.getContents() == null
            : this.getContents().equals(other.getContents()));
  }

  /**
   * This method was generated by MyBatis Generator. This method corresponds to the database table
   * t_inquiry_lists
   *
   * @mbg.generated
   */
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((getInquiryId() == null) ? 0 : getInquiryId().hashCode());
    result = prime * result + ((getUserName() == null) ? 0 : getUserName().hashCode());
    result = prime * result + ((getMailAddress() == null) ? 0 : getMailAddress().hashCode());
    result =
        prime * result + ((getInquiryKindCode() == null) ? 0 : getInquiryKindCode().hashCode());
    result = prime * result + ((getCreateAt() == null) ? 0 : getCreateAt().hashCode());
    result = prime * result + ((getContents() == null) ? 0 : getContents().hashCode());
    return result;
  }
}