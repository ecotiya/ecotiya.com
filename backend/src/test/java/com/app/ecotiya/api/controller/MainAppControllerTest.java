package com.app.ecotiya.api.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app.ecotiya.api.service.MainAppService;

public class MainAppControllerTest {
  @Mock private MainAppService mainAppService;

  @InjectMocks private MainAppController controller;

  @BeforeEach
  public void setup() {
    MockitoAnnotations.openMocks(this);
  }

  @DisplayName("READ TEST: Check if all mainAppData information retrieved.")
  @Test
  public void testGetAll() {

    // m_site_comment test  =========================
    //    MSiteComment mSiteComment1 = new MSiteComment();
    //    mSiteComment1.setCommentKindCode("about");
    //    mSiteComment1.setCommentContents("説明");
    //    mSiteComment1.setCommentImage("");
    //    MSiteComment mSiteComment2 = new MSiteComment();
    //    mSiteComment2.setCommentKindCode("profile");
    //    mSiteComment2.setCommentContents("説明");
    //    mSiteComment2.setCommentImage("");
    //    MSiteComment mSiteComment3 = new MSiteComment();
    //    mSiteComment3.setCommentKindCode("career");
    //    mSiteComment3.setCommentContents("説明");
    //    mSiteComment3.setCommentImage("");
    //    MSiteComment mSiteComment4 = new MSiteComment();
    //    mSiteComment4.setCommentKindCode("skills");
    //    mSiteComment4.setCommentContents("説明");
    //    mSiteComment4.setCommentImage("");
    //
    //    List<MSiteComment> mSiteComments = new ArrayList<>();
    //    mSiteComments.add(mSiteComment1);
    //    mSiteComments.add(mSiteComment2);
    //    mSiteComments.add(mSiteComment3);
    //    mSiteComments.add(mSiteComment4);
    //
    //    // m_career test  =========================
    //    MCareer mCareer1 = new MCareer();
    //    mCareer1.setCareerDate("2016/01");
    //    mCareer1.setCareerTitle("就職");
    //    mCareer1.setCareerContents("プログラマになる");
    //
    //    List<MCareer> mCareers = new ArrayList<>();
    //    mCareers.add(mCareer1);
    //
    //    // check  =========================
    //    MainAppModel mainAppModel = new MainAppModel();
    //    mainAppModel.setMCareerList(mCareers);
    //    mainAppModel.setMSiteCommentList(mSiteComments);
    //    when(mainAppService.retrieve()).thenReturn(mainAppModel);
    //
    //    MainAppModel actuals = controller.getMainApp();
    //    assertEquals(4, actuals.getMSiteCommentList().size());
    //    assertEquals(1, actuals.getMCareerList().size());
    //    verify(mainAppService, times(1)).retrieve();
  }
}
