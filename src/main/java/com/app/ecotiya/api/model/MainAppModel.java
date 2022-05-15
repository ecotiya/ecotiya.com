package com.app.ecotiya.api.model;

import java.util.List;

import com.app.ecotiya.domain.entity.TCareer;
import com.app.ecotiya.domain.entity.TSiteComment;

import lombok.Data;

@Data
public class MainAppModel {

  private List<TSiteComment> tSiteCommentList;

  private List<TCareer> tCareerList;

  // TODO
  //  List<TSkill> tSkillList;

}
