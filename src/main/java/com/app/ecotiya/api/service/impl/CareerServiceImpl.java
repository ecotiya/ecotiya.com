package com.app.ecotiya.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecotiya.api.constants.CommonConstants;
import com.app.ecotiya.api.model.CareerModel;
import com.app.ecotiya.api.service.CareerService;
import com.app.ecotiya.domain.repository.MCareerMapper;
import com.app.ecotiya.domain.repository.MSiteCommentMapper;

@Service
public class CareerServiceImpl implements CareerService {

  @Autowired private MSiteCommentMapper mSiteCommentMapper;
  @Autowired private MCareerMapper mCareerMapper;

  @Override
  public CareerModel retrieve() {

    CareerModel careerModel = new CareerModel();
    careerModel.setMSiteComment(
        mSiteCommentMapper.selectByPrimaryKey(CommonConstants.SITE_COMMENT_KEY_CAREER, 1));
    careerModel.setMCareerList(mCareerMapper.selectAll());

    return careerModel;
  }
}
