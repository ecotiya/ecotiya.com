package com.app.ecotiya.api.model;

import java.util.List;

import com.app.ecotiya.domain.entity.MCareer;
import com.app.ecotiya.domain.entity.MSiteComment;

import lombok.Data;

@Data
public class MainAppModel {

  private List<MSiteComment> mSiteCommentList;

  private List<MCareer> mCareerList;

  // TODO
  //  List<TSkill> tSkillList;

}
