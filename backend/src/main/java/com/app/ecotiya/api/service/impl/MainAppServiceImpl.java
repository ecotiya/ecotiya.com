package com.app.ecotiya.api.service.impl;

import java.time.LocalDateTime;

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
      logger.error(e.getMessage());
    }

    return mainAppDataModel;
  }

  @Override
  public DiscordWebhookModel register(InquiryModel inquiryModel) {

    DiscordWebhookModel discordWebhookModel = new DiscordWebhookModel();

    try {
      TInquiryLists tInquiryLists = new TInquiryLists();
      tInquiryLists.setUserName(inquiryModel.getUserName());
      tInquiryLists.setMailAddress(inquiryModel.getMailAddress());
      tInquiryLists.setInquiryKindCode(inquiryModel.getInquiryKindCode());
      tInquiryLists.setContents(inquiryModel.getContents());
      tInquiryLists.setCreateAt(LocalDateTime.now());
      tInquiryListsMapper.insertReturnId(tInquiryLists);

      MInquiryKinds mInquiryKinds =
          mInquiryKindsMapper.selectByPrimaryKey(inquiryModel.getInquiryKindCode());

      discordWebhookModel.setInquiryId(tInquiryLists.getInquiryId());
      discordWebhookModel.setInquiryKindName(mInquiryKinds.getInquiryKindName());

    } catch (Exception e) {
      logger.error(e.getMessage());
    }

    return discordWebhookModel;
  }
}
