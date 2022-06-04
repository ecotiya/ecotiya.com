package com.app.ecotiya.api.service;

import com.app.ecotiya.domain.entity.MInquiryKinds;

public interface ContactService {

  /**
   * Register a new mInquiryKinds information.
   *
   * @param mInquiryKinds mInquiryKinds object which we want to register
   * @return mInquiryKinds object registered
   */
  MInquiryKinds register(MInquiryKinds mInquiryKinds);
}
