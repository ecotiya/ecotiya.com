package com.app.ecotiya.api.service;

import com.app.ecotiya.domain.entity.MInquiryKinds;

public interface MInquiryKindsService {

  /**
   * Register a new mInquiryKinds information.
   *
   * @param mInquiryKinds mInquiryKinds object which we want to register
   * @return mInquiryKinds object registered
   */
  MInquiryKinds register(MInquiryKinds mInquiryKinds);
}
