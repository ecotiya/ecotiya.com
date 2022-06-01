package com.app.ecotiya.api.model;

import java.util.List;

import com.app.ecotiya.domain.entity.MCareer;
import com.app.ecotiya.domain.entity.MInquiryKinds;
import com.app.ecotiya.domain.entity.MSectionComment;
import com.app.ecotiya.domain.entity.MSectionTitle;
import com.app.ecotiya.domain.entity.MSkill;

import lombok.Data;

@Data
public class MainAppModel {

  private List<MSectionTitle> mSectionTitleList;

  private List<MSectionComment> mSectionCommentList;

  private List<MCareer> mCareerList;

  private List<MSkill> mSkillList;

  private List<MInquiryKinds> mInquiryKindsList;
}
