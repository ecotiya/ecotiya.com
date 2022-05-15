package com.app.ecotiya.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecotiya.api.model.MainAppModel;
import com.app.ecotiya.api.service.MainAppService;
import com.app.ecotiya.domain.repository.MCareerMapper;
import com.app.ecotiya.domain.repository.MSiteCommentMapper;

@Service
public class MainAppServiceImpl implements MainAppService {

  @Autowired private MSiteCommentMapper mSiteCommentMapper;
  @Autowired private MCareerMapper mCareerMapper;

  // TODO
  //  @Autowired private TSkillMapper tSkillMapper;

  @Override
  public MainAppModel retrieve() {

    MainAppModel mainAppDataModel = new MainAppModel();
    mainAppDataModel.setMSiteCommentList(mSiteCommentMapper.selectAll());
    mainAppDataModel.setMCareerList(mCareerMapper.selectAll());

    return mainAppDataModel;
  }
}
