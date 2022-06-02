package com.app.ecotiya.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecotiya.api.model.MainAppModel;
import com.app.ecotiya.api.service.MainAppService;
import com.app.ecotiya.domain.repository.MCareerMapper;
import com.app.ecotiya.domain.repository.MInquiryKindsMapper;
import com.app.ecotiya.domain.repository.MSectionCommentMapper;
import com.app.ecotiya.domain.repository.MSectionTitleMapper;
import com.app.ecotiya.domain.repository.MSkillMapper;

@Service
public class MainAppServiceImpl implements MainAppService {

  @Autowired private MSectionTitleMapper mSectionTitleMapper;
  @Autowired private MSectionCommentMapper mSectionCommentMapper;
  @Autowired private MCareerMapper mCareerMapper;
  @Autowired private MSkillMapper mSkillMapper;
  @Autowired private MInquiryKindsMapper mInquiryKindsMapper;

  @Override
  public MainAppModel retrieve() {

    MainAppModel mainAppDataModel = new MainAppModel();
    mainAppDataModel.setMSectionTitleList(mSectionTitleMapper.selectAll());
    mainAppDataModel.setMSectionCommentList(mSectionCommentMapper.selectAll());
    mainAppDataModel.setMCareerList(mCareerMapper.selectAll());
    mainAppDataModel.setMSkillList(mSkillMapper.selectAll());
    mainAppDataModel.setMInquiryKindsList(mInquiryKindsMapper.selectAll());

    return mainAppDataModel;
  }
}
