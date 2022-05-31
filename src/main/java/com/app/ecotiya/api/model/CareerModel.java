package com.app.ecotiya.api.model;

import java.util.List;

import com.app.ecotiya.domain.entity.MCareer;
import com.app.ecotiya.domain.entity.MSiteComment;

import lombok.Data;

@Data
public class CareerModel {

  private MSiteComment mSiteComment;

  private List<MCareer> mCareerList;
}
