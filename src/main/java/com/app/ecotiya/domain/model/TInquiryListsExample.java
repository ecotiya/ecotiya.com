package com.app.ecotiya.domain.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TInquiryListsExample {
    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    protected String orderByClause;
    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    protected boolean distinct;
    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public TInquiryListsExample () {
        oredCriteria = new ArrayList<> ();
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public void setOrderByClause (String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public String getOrderByClause () {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public void setDistinct (boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public boolean isDistinct () {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public List<Criteria> getOredCriteria () {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public void or (Criteria criteria) {
        oredCriteria.add (criteria);
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public Criteria or () {
        Criteria criteria = createCriteriaInternal ();
        oredCriteria.add (criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public Criteria createCriteria () {
        Criteria criteria = createCriteriaInternal ();
        if (oredCriteria.size () == 0) {
            oredCriteria.add (criteria);
        }
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    protected Criteria createCriteriaInternal () {
        Criteria criteria = new Criteria ();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator. This method corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public void clear () {
        oredCriteria.clear ();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator. This class corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;
        
        protected GeneratedCriteria () {
            super ();
            criteria = new ArrayList<> ();
        }
        
        public boolean isValid () {
            return criteria.size () > 0;
        }
        
        public List<Criterion> getAllCriteria () {
            return criteria;
        }
        
        public List<Criterion> getCriteria () {
            return criteria;
        }
        
        protected void addCriterion (String condition) {
            if (condition == null) {
                throw new RuntimeException ("Value for condition cannot be null");
            }
            criteria.add (new Criterion (condition));
        }
        
        protected void addCriterion (String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException ("Value for " + property + " cannot be null");
            }
            criteria.add (new Criterion (condition, value));
        }
        
        protected void addCriterion (String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException ("Between values for " + property + " cannot be null");
            }
            criteria.add (new Criterion (condition, value1, value2));
        }
        
        public Criteria andInquiryIdIsNull () {
            addCriterion ("inquiry_id is null");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdIsNotNull () {
            addCriterion ("inquiry_id is not null");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdEqualTo (Long value) {
            addCriterion ("inquiry_id =", value, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdNotEqualTo (Long value) {
            addCriterion ("inquiry_id <>", value, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdGreaterThan (Long value) {
            addCriterion ("inquiry_id >", value, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdGreaterThanOrEqualTo (Long value) {
            addCriterion ("inquiry_id >=", value, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdLessThan (Long value) {
            addCriterion ("inquiry_id <", value, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdLessThanOrEqualTo (Long value) {
            addCriterion ("inquiry_id <=", value, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdIn (List<Long> values) {
            addCriterion ("inquiry_id in", values, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdNotIn (List<Long> values) {
            addCriterion ("inquiry_id not in", values, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdBetween (Long value1, Long value2) {
            addCriterion ("inquiry_id between", value1, value2, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andInquiryIdNotBetween (Long value1, Long value2) {
            addCriterion ("inquiry_id not between", value1, value2, "inquiryId");
            return (Criteria) this;
        }
        
        public Criteria andNameIsNull () {
            addCriterion ("name is null");
            return (Criteria) this;
        }
        
        public Criteria andNameIsNotNull () {
            addCriterion ("name is not null");
            return (Criteria) this;
        }
        
        public Criteria andNameEqualTo (String value) {
            addCriterion ("name =", value, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameNotEqualTo (String value) {
            addCriterion ("name <>", value, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameGreaterThan (String value) {
            addCriterion ("name >", value, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameGreaterThanOrEqualTo (String value) {
            addCriterion ("name >=", value, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameLessThan (String value) {
            addCriterion ("name <", value, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameLessThanOrEqualTo (String value) {
            addCriterion ("name <=", value, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameLike (String value) {
            addCriterion ("name like", value, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameNotLike (String value) {
            addCriterion ("name not like", value, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameIn (List<String> values) {
            addCriterion ("name in", values, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameNotIn (List<String> values) {
            addCriterion ("name not in", values, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameBetween (String value1, String value2) {
            addCriterion ("name between", value1, value2, "name");
            return (Criteria) this;
        }
        
        public Criteria andNameNotBetween (String value1, String value2) {
            addCriterion ("name not between", value1, value2, "name");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressIsNull () {
            addCriterion ("mail_address is null");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressIsNotNull () {
            addCriterion ("mail_address is not null");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressEqualTo (String value) {
            addCriterion ("mail_address =", value, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressNotEqualTo (String value) {
            addCriterion ("mail_address <>", value, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressGreaterThan (String value) {
            addCriterion ("mail_address >", value, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressGreaterThanOrEqualTo (String value) {
            addCriterion ("mail_address >=", value, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressLessThan (String value) {
            addCriterion ("mail_address <", value, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressLessThanOrEqualTo (String value) {
            addCriterion ("mail_address <=", value, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressLike (String value) {
            addCriterion ("mail_address like", value, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressNotLike (String value) {
            addCriterion ("mail_address not like", value, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressIn (List<String> values) {
            addCriterion ("mail_address in", values, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressNotIn (List<String> values) {
            addCriterion ("mail_address not in", values, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressBetween (String value1, String value2) {
            addCriterion ("mail_address between", value1, value2, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andMailAddressNotBetween (String value1, String value2) {
            addCriterion ("mail_address not between", value1, value2, "mailAddress");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeIsNull () {
            addCriterion ("inquiry_kind_code is null");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeIsNotNull () {
            addCriterion ("inquiry_kind_code is not null");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeEqualTo (String value) {
            addCriterion ("inquiry_kind_code =", value, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeNotEqualTo (String value) {
            addCriterion ("inquiry_kind_code <>", value, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeGreaterThan (String value) {
            addCriterion ("inquiry_kind_code >", value, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeGreaterThanOrEqualTo (String value) {
            addCriterion ("inquiry_kind_code >=", value, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeLessThan (String value) {
            addCriterion ("inquiry_kind_code <", value, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeLessThanOrEqualTo (String value) {
            addCriterion ("inquiry_kind_code <=", value, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeLike (String value) {
            addCriterion ("inquiry_kind_code like", value, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeNotLike (String value) {
            addCriterion ("inquiry_kind_code not like", value, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeIn (List<String> values) {
            addCriterion ("inquiry_kind_code in", values, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeNotIn (List<String> values) {
            addCriterion ("inquiry_kind_code not in", values, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeBetween (String value1, String value2) {
            addCriterion ("inquiry_kind_code between", value1, value2, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andInquiryKindCodeNotBetween (String value1, String value2) {
            addCriterion ("inquiry_kind_code not between", value1, value2, "inquiryKindCode");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtIsNull () {
            addCriterion ("created_at is null");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtIsNotNull () {
            addCriterion ("created_at is not null");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtEqualTo (Date value) {
            addCriterion ("created_at =", value, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtNotEqualTo (Date value) {
            addCriterion ("created_at <>", value, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtGreaterThan (Date value) {
            addCriterion ("created_at >", value, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtGreaterThanOrEqualTo (Date value) {
            addCriterion ("created_at >=", value, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtLessThan (Date value) {
            addCriterion ("created_at <", value, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtLessThanOrEqualTo (Date value) {
            addCriterion ("created_at <=", value, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtIn (List<Date> values) {
            addCriterion ("created_at in", values, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtNotIn (List<Date> values) {
            addCriterion ("created_at not in", values, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtBetween (Date value1, Date value2) {
            addCriterion ("created_at between", value1, value2, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andCreatedAtNotBetween (Date value1, Date value2) {
            addCriterion ("created_at not between", value1, value2, "createdAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtIsNull () {
            addCriterion ("updated_at is null");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtIsNotNull () {
            addCriterion ("updated_at is not null");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtEqualTo (Date value) {
            addCriterion ("updated_at =", value, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtNotEqualTo (Date value) {
            addCriterion ("updated_at <>", value, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtGreaterThan (Date value) {
            addCriterion ("updated_at >", value, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtGreaterThanOrEqualTo (Date value) {
            addCriterion ("updated_at >=", value, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtLessThan (Date value) {
            addCriterion ("updated_at <", value, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtLessThanOrEqualTo (Date value) {
            addCriterion ("updated_at <=", value, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtIn (List<Date> values) {
            addCriterion ("updated_at in", values, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtNotIn (List<Date> values) {
            addCriterion ("updated_at not in", values, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtBetween (Date value1, Date value2) {
            addCriterion ("updated_at between", value1, value2, "updatedAt");
            return (Criteria) this;
        }
        
        public Criteria andUpdatedAtNotBetween (Date value1, Date value2) {
            addCriterion ("updated_at not between", value1, value2, "updatedAt");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator. This class corresponds to the database table t_inquiry_lists
     * @mbg.generated
     */
    public static class Criterion {
        private String condition;
        private Object value;
        private Object secondValue;
        private boolean noValue;
        private boolean singleValue;
        private boolean betweenValue;
        private boolean listValue;
        private String typeHandler;
        
        public String getCondition () {
            return condition;
        }
        
        public Object getValue () {
            return value;
        }
        
        public Object getSecondValue () {
            return secondValue;
        }
        
        public boolean isNoValue () {
            return noValue;
        }
        
        public boolean isSingleValue () {
            return singleValue;
        }
        
        public boolean isBetweenValue () {
            return betweenValue;
        }
        
        public boolean isListValue () {
            return listValue;
        }
        
        public String getTypeHandler () {
            return typeHandler;
        }
        
        protected Criterion (String condition) {
            super ();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }
        
        protected Criterion (String condition, Object value, String typeHandler) {
            super ();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }
        
        protected Criterion (String condition, Object value) {
            this (condition, value, null);
        }
        
        protected Criterion (String condition, Object value, Object secondValue, String typeHandler) {
            super ();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }
        
        protected Criterion (String condition, Object value, Object secondValue) {
            this (condition, value, secondValue, null);
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table t_inquiry_lists
     *
     * @mbg.generated do_not_delete_during_merge Thu May 12 21:56:48 JST 2022
     */
    public static class Criteria extends GeneratedCriteria {
        protected Criteria() {
            super();
        }
    }
}