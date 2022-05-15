package com.app.ecotiya.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.ecotiya.api.model.MainAppModel;
import com.app.ecotiya.api.service.MainAppService;
import com.app.ecotiya.domain.repository.TCareerMapper;
import com.app.ecotiya.domain.repository.TSiteCommentMapper;

public class MainAppServiceImpl implements MainAppService {

  @Autowired private TSiteCommentMapper tSiteCommentMapper;
  @Autowired private TCareerMapper tCareerMapper;

  // TODO
  //  @Autowired private TSkillMapper tSkillMapper;

  @Override
  public MainAppModel retrieve() {

    MainAppModel mainAppDataModel = new MainAppModel();
    mainAppDataModel.setTSiteCommentList(tSiteCommentMapper.selectAll());
    mainAppDataModel.setTCareerList(tCareerMapper.selectAll());

    return mainAppDataModel;
  }
}
