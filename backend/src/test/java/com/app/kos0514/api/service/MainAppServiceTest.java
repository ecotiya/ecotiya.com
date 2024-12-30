package com.app.kos0514.api.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app.kos0514.api.model.MainAppModel;
import com.app.kos0514.api.service.impl.MainAppServiceImpl;
import com.app.kos0514.domain.repository.MCareerMapper;

public class MainAppServiceTest {

  //  @Mock private MSiteCommentMapper mSiteCommentMapper;
  @Mock private MCareerMapper mCareerMapper;

  @InjectMocks private MainAppServiceImpl service;

  @BeforeEach
  public void setup() {
    MockitoAnnotations.openMocks(this);
  }

  @DisplayName("READ TEST: Check if all mainAppData information retrieved.")
  @Test
  public void testRetrieveAll() {
    //
    //    // m_career test  =========================
    //    MCareer mCareer = new MCareer();
    //    mCareer.setCareerDate("2030/05");
    //    mCareer.setCareerDivision("2");
    //    mCareer.setCareerTitle("テスト株式会社を創業");
    //    mCareer.setCareerContents("テスト株式会社を創業");
    //
    //    List<MCareer> mSiteComments = new ArrayList<>();
    //    mSiteComments.add(mSiteComment1);
    //    when(mSiteCommentMapper.selectAll()).thenReturn(mSiteComments);
    //
    //    // m_career test  =========================
    //    MCareer mCareer1 = new MCareer();
    //    mCareer1.setCareerDate("2016/01");
    //    mCareer1.setCareerTitle("就職");
    //    mCareer1.setCareerContents("プログラマになる");
    //
    //    List<MCareer> mCareers = new ArrayList<>();
    //    mCareers.add(mCareer1);
    //    when(mCareerMapper.selectAll()).thenReturn(mCareers);

    // check  =========================
    MainAppModel actuals = service.retrieve();
    //    assertEquals(4, actuals.getMSiteCommentList().size());
    //    verify(mSiteCommentMapper, times(1)).selectAll();
    //
    //    assertEquals(1, actuals.getMCareerList().size());
    //    verify(mCareerMapper, times(1)).selectAll();
  }
}
