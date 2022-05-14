package com.app.ecotiya.api.service.impl;

import org.springframework.stereotype.Service;

import com.app.ecotiya.api.service.MInquiryKindsService;
import com.app.ecotiya.domain.entity.MInquiryKinds;
import com.app.ecotiya.domain.repository.MInquiryKindsMapper;

@Service
public class MInquiryKindsServiceImpl implements MInquiryKindsService {

  private MInquiryKindsMapper mapper;

  public MInquiryKindsServiceImpl(MInquiryKindsMapper mapper) {
    this.mapper = mapper;
  }

  @Override
  public MInquiryKinds register(MInquiryKinds mInquiryKinds) {
    mapper.insert(mInquiryKinds);
    return mInquiryKinds;
  }
}
