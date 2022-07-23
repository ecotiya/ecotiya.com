package com.app.ecotiya.api.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.app.ecotiya.api.service.impl.ContactServiceImpl;
import com.app.ecotiya.domain.entity.MInquiryKinds;
import com.app.ecotiya.domain.repository.MInquiryKindsMapper;

public class ContactServiceTest {

  @Mock private MInquiryKindsMapper mapper;

  @InjectMocks private ContactServiceImpl service;

  @BeforeEach
  public void setup() {
    MockitoAnnotations.openMocks(this);
  }

  @DisplayName("CREATE TEST: Check if registeration succeeded.")
  @Test
  public void testRegister() {
    MInquiryKinds mInquiryKinds = new MInquiryKinds();
    mInquiryKinds.setInquiryKindCode("test");
    mInquiryKinds.setInquiryKindName("テスト");

    when(mapper.insert(Mockito.any(MInquiryKinds.class))).thenReturn(1);
    MInquiryKinds actual = service.register(mInquiryKinds);
    assertEquals(mInquiryKinds.getInquiryKindCode(), actual.getInquiryKindCode());
    assertEquals(mInquiryKinds.getInquiryKindName(), actual.getInquiryKindName());

    Mockito.verify(mapper, Mockito.times(1)).insert(mInquiryKinds);
  }
}
