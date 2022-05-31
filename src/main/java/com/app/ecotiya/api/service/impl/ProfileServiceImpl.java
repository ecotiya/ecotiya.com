package com.app.ecotiya.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecotiya.api.constants.CommonConstants;
import com.app.ecotiya.api.service.ProfileService;
import com.app.ecotiya.domain.entity.MSiteComment;
import com.app.ecotiya.domain.repository.MSiteCommentMapper;

@Service
public class ProfileServiceImpl implements ProfileService {

  @Autowired private MSiteCommentMapper mapper;

  @Override
  public MSiteComment retrieve() {
    return mapper.selectByPrimaryKey(CommonConstants.SITE_COMMENT_KEY_PROFILE, 1);
  }
}
