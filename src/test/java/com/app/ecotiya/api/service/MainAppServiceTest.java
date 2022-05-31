package com.app.ecotiya.api.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app.ecotiya.api.model.MainAppModel;
import com.app.ecotiya.api.service.impl.MainAppServiceImpl;
import com.app.ecotiya.domain.entity.MCareer;
import com.app.ecotiya.domain.entity.MSiteComment;
import com.app.ecotiya.domain.repository.MCareerMapper;
import com.app.ecotiya.domain.repository.MSiteCommentMapper;

public class MainAppServiceTest {

  @Mock private MSiteCommentMapper mSiteCommentMapper;
  @Mock private MCareerMapper mCareerMapper;

  @InjectMocks private MainAppServiceImpl service;

  @BeforeEach
  public void setup() {
    MockitoAnnotations.openMocks(this);
  }

  @DisplayName("READ TEST: Check if all mainAppData information retrieved.")
  @Test
  public void testRetrieveAll() {

    // m_site_comment test  =========================
    MSiteComment mSiteComment1 = new MSiteComment();
    mSiteComment1.setCommentKindCode("about");
    mSiteComment1.setCommentContents("説明");
    mSiteComment1.setCommentImage("");
    MSiteComment mSiteComment2 = new MSiteComment();
    mSiteComment2.setCommentKindCode("profile");
    mSiteComment2.setCommentContents("説明");
    mSiteComment2.setCommentImage("");
    MSiteComment mSiteComment3 = new MSiteComment();
    mSiteComment3.setCommentKindCode("career");
    mSiteComment3.setCommentContents("説明");
    mSiteComment3.setCommentImage("");
    MSiteComment mSiteComment4 = new MSiteComment();
    mSiteComment4.setCommentKindCode("skills");
    mSiteComment4.setCommentContents("説明");
    mSiteComment4.setCommentImage("");

    List<MSiteComment> mSiteComments = new ArrayList<>();
    mSiteComments.add(mSiteComment1);
    mSiteComments.add(mSiteComment2);
    mSiteComments.add(mSiteComment3);
    mSiteComments.add(mSiteComment4);
    when(mSiteCommentMapper.selectAll()).thenReturn(mSiteComments);

    // m_career test  =========================
    MCareer mCareer1 = new MCareer();
    mCareer1.setCareerDate("2016/01");
    mCareer1.setCareerTitle("就職");
    mCareer1.setCareerContents("プログラマになる");

    List<MCareer> mCareers = new ArrayList<>();
    mCareers.add(mCareer1);
    when(mCareerMapper.selectAll()).thenReturn(mCareers);

    // check  =========================
    MainAppModel actuals = service.retrieve();
    assertEquals(4, actuals.getMSiteCommentList().size());
    verify(mSiteCommentMapper, times(1)).selectAll();

    assertEquals(1, actuals.getMCareerList().size());
    verify(mCareerMapper, times(1)).selectAll();
  }
}
