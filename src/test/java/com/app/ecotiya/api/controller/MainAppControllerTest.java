package com.app.ecotiya.api.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app.ecotiya.api.model.MainAppModel;
import com.app.ecotiya.api.service.MainAppService;
import com.app.ecotiya.domain.entity.MCareer;
import com.app.ecotiya.domain.entity.MSiteComment;

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
    MSiteComment mSiteComment1 = new MSiteComment();
    mSiteComment1.setComentKindCode("about");
    mSiteComment1.setComentKindName("このサイトについて");
    mSiteComment1.setContents("説明");
    mSiteComment1.setImage("");
    MSiteComment mSiteComment2 = new MSiteComment();
    mSiteComment2.setComentKindCode("profile");
    mSiteComment2.setComentKindName("プロフィール");
    mSiteComment2.setContents("説明");
    mSiteComment2.setImage("");
    MSiteComment mSiteComment3 = new MSiteComment();
    mSiteComment3.setComentKindCode("career");
    mSiteComment3.setComentKindName("経歴");
    mSiteComment3.setContents("説明");
    mSiteComment3.setImage("");
    MSiteComment mSiteComment4 = new MSiteComment();
    mSiteComment4.setComentKindCode("skills");
    mSiteComment4.setComentKindName("スキル");
    mSiteComment4.setContents("説明");
    mSiteComment4.setImage("");

    List<MSiteComment> mSiteComments = new ArrayList<>();
    mSiteComments.add(mSiteComment1);
    mSiteComments.add(mSiteComment2);
    mSiteComments.add(mSiteComment3);
    mSiteComments.add(mSiteComment4);

    // m_career test  =========================
    MCareer mCareer1 = new MCareer();
    mCareer1.setCareerId(1);
    mCareer1.setCareerDate(LocalDate.of(2016, 01, 01));
    mCareer1.setTitle("就職");
    mCareer1.setContents("プログラマになる");

    List<MCareer> mCareers = new ArrayList<>();
    mCareers.add(mCareer1);

    // check  =========================
    MainAppModel mainAppModel = new MainAppModel();
    mainAppModel.setMCareerList(mCareers);
    mainAppModel.setMSiteCommentList(mSiteComments);
    when(mainAppService.retrieve()).thenReturn(mainAppModel);

    MainAppModel actuals = controller.getMainApp();
    assertEquals(4, actuals.getMSiteCommentList().size());
    assertEquals(1, actuals.getMCareerList().size());
    verify(mainAppService, times(1)).retrieve();
  }
}
