package com.app.ecotiya.api.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecotiya.api.model.DiscordWebhookModel;
import com.app.ecotiya.api.model.InquiryModel;
import com.app.ecotiya.api.model.MainAppModel;
import com.app.ecotiya.api.service.MainAppService;
import com.app.ecotiya.domain.entity.MInquiryKinds;
import com.app.ecotiya.domain.entity.TInquiryLists;
import com.app.ecotiya.domain.repository.MCareerMapper;
import com.app.ecotiya.domain.repository.MInquiryKindsMapper;
import com.app.ecotiya.domain.repository.MSectionCommentMapper;
import com.app.ecotiya.domain.repository.MSectionTitleMapper;
import com.app.ecotiya.domain.repository.MSkillMapper;
import com.app.ecotiya.domain.repository.TInquiryListsMapper;

@Service
public class MainAppServiceImpl implements MainAppService {

  @Autowired private MSectionTitleMapper mSectionTitleMapper;
  @Autowired private MSectionCommentMapper mSectionCommentMapper;
  @Autowired private MCareerMapper mCareerMapper;
  @Autowired private MSkillMapper mSkillMapper;
  @Autowired private MInquiryKindsMapper mInquiryKindsMapper;
  @Autowired private TInquiryListsMapper tInquiryListsMapper;

  Logger logger = LoggerFactory.getLogger(MainAppServiceImpl.class);

  @Override
  public MainAppModel retrieve() {

    MainAppModel mainAppDataModel = new MainAppModel();

    try {
      logger.info("ecotiyaサイト表示用のデータ取得 開始");
      mainAppDataModel.setSectionTitleList(mSectionTitleMapper.selectAll());
      mainAppDataModel.setSectionCommentList(mSectionCommentMapper.selectAll());
      mainAppDataModel.setCareerList(mCareerMapper.selectAll());
      mainAppDataModel.setSkillList(mSkillMapper.selectAll());
      mainAppDataModel.setInquiryKindsList(mInquiryKindsMapper.selectAll());
      logger.info("ecotiyaサイト表示用のデータ取得 終了");

    } catch (Exception e) {
      logger.error("ecotiyaサイト表示用のデータ取得に失敗しました。 【エラー内容】" + e.getMessage());
    }

    return mainAppDataModel;
  }

  @Override
  public DiscordWebhookModel register(InquiryModel inquiryModel) {

    DiscordWebhookModel discordWebhookModel = new DiscordWebhookModel();

    try {
      logger.info("問い合わせ一覧保存 開始");
      TInquiryLists tInquiryLists = new TInquiryLists();
      tInquiryLists.setUserName(inquiryModel.getUserName());
      tInquiryLists.setMailAddress(inquiryModel.getMailAddress());
      tInquiryLists.setInquiryKindCode(inquiryModel.getInquiryKindCode());
      tInquiryLists.setContents(inquiryModel.getContents());
      tInquiryListsMapper.insertReturnId(tInquiryLists);

      MInquiryKinds mInquiryKinds =
          mInquiryKindsMapper.selectByPrimaryKey(inquiryModel.getInquiryKindCode());

      discordWebhookModel.setInquiryId(tInquiryLists.getInquiryId());
      discordWebhookModel.setInquiryKindName(mInquiryKinds.getInquiryKindName());
      logger.info("問い合わせ一覧保存 終了");

    } catch (Exception e) {
      logger.error("問い合わせ一覧保存に失敗しました。 【エラー内容】" + e.getMessage());
    }

    return discordWebhookModel;
  }
}
