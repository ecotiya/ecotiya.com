package com.app.ecotiya.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecotiya.api.model.SkillModel;
import com.app.ecotiya.api.service.SkillService;
import com.app.ecotiya.domain.repository.MSkillMapper;

@Service
public class SkillServiceImpl implements SkillService {

  @Autowired private MSkillMapper mSkillMapper;

  @Override
  public SkillModel retrieve() {

    SkillModel skillModel = new SkillModel();
    //    skillModel.setMSkillList(mSkillMapper.selectAll());
    // TODO
    skillModel.setMSkillList(null);

    return skillModel;
  }
}
