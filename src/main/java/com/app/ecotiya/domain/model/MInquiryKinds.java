package com.app.ecotiya.domain.model;

import java.util.Date;

public class MInquiryKinds {

    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database column m_inquiry_kinds.inquiry_kind_code
     * @mbg.generated
     */
    private String inquiryKindCode;
    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database column m_inquiry_kinds.inquiry_kind_name
     * @mbg.generated
     */
    private String inquiryKindName;
    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database column m_inquiry_kinds.created_at
     * @mbg.generated
     */
    private Date createdAt;
    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database column m_inquiry_kinds.updated_at
     * @mbg.generated
     */
    private Date updatedAt;

    /**
     * This method was generated by MyBatis Generator. This method returns the value of the database column m_inquiry_kinds.inquiry_kind_code
     * @return  the value of m_inquiry_kinds.inquiry_kind_code
     * @mbg.generated
     */
    public String getInquiryKindCode () {
        return inquiryKindCode;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the value of the database column m_inquiry_kinds.inquiry_kind_code
     * @param inquiryKindCode  the value for m_inquiry_kinds.inquiry_kind_code
     * @mbg.generated
     */
    public void setInquiryKindCode (String inquiryKindCode) {
        this.inquiryKindCode = inquiryKindCode == null ? null : inquiryKindCode.trim ();
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the value of the database column m_inquiry_kinds.inquiry_kind_name
     * @return  the value of m_inquiry_kinds.inquiry_kind_name
     * @mbg.generated
     */
    public String getInquiryKindName () {
        return inquiryKindName;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the value of the database column m_inquiry_kinds.inquiry_kind_name
     * @param inquiryKindName  the value for m_inquiry_kinds.inquiry_kind_name
     * @mbg.generated
     */
    public void setInquiryKindName (String inquiryKindName) {
        this.inquiryKindName = inquiryKindName == null ? null : inquiryKindName.trim ();
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the value of the database column m_inquiry_kinds.created_at
     * @return  the value of m_inquiry_kinds.created_at
     * @mbg.generated
     */
    public Date getCreatedAt () {
        return createdAt;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the value of the database column m_inquiry_kinds.created_at
     * @param createdAt  the value for m_inquiry_kinds.created_at
     * @mbg.generated
     */
    public void setCreatedAt (Date createdAt) {
        this.createdAt = createdAt;
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the value of the database column m_inquiry_kinds.updated_at
     * @return  the value of m_inquiry_kinds.updated_at
     * @mbg.generated
     */
    public Date getUpdatedAt () {
        return updatedAt;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the value of the database column m_inquiry_kinds.updated_at
     * @param updatedAt  the value for m_inquiry_kinds.updated_at
     * @mbg.generated
     */
    public void setUpdatedAt (Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table m_inquiry_kinds
     * @mbg.generated
     */
    @Override
    public boolean equals (Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass () != that.getClass ()) {
            return false;
        }
        MInquiryKinds other = (MInquiryKinds) that;
        return (this.getInquiryKindCode () == null ? other.getInquiryKindCode () == null
                : this.getInquiryKindCode ().equals (other.getInquiryKindCode ()))
                && (this.getInquiryKindName () == null ? other.getInquiryKindName () == null
                        : this.getInquiryKindName ().equals (other.getInquiryKindName ()))
                && (this.getCreatedAt () == null ? other.getCreatedAt () == null
                        : this.getCreatedAt ().equals (other.getCreatedAt ()))
                && (this.getUpdatedAt () == null ? other.getUpdatedAt () == null
                        : this.getUpdatedAt ().equals (other.getUpdatedAt ()));
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table m_inquiry_kinds
     * @mbg.generated
     */
    @Override
    public int hashCode () {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getInquiryKindCode () == null) ? 0 : getInquiryKindCode ().hashCode ());
        result = prime * result + ((getInquiryKindName () == null) ? 0 : getInquiryKindName ().hashCode ());
        result = prime * result + ((getCreatedAt () == null) ? 0 : getCreatedAt ().hashCode ());
        result = prime * result + ((getUpdatedAt () == null) ? 0 : getUpdatedAt ().hashCode ());
        return result;
    }
}