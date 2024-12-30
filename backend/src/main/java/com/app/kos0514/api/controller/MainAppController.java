package com.app.kos0514.api.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.kos0514.api.config.AppProperties;
import com.app.kos0514.api.model.DiscordWebhookModel;
import com.app.kos0514.api.model.InquiryModel;
import com.app.kos0514.api.model.MainAppModel;
import com.app.kos0514.api.notify.DiscordWebhook;
import com.app.kos0514.api.notify.DiscordWebhook.EmbedObject;
import com.app.kos0514.api.service.MainAppService;

@RestController
@RequestMapping("/")
public class MainAppController {

  Logger logger = LoggerFactory.getLogger(MainAppController.class);

  @Autowired AppProperties appProperties;

  private MainAppService mainAppService;

  public MainAppController(MainAppService mainAppService) {
    this.mainAppService = mainAppService;
  }

  /** メインページを表示するために必要なデータを取得します。 */
  @GetMapping
  public MainAppModel getMainApp() {
    logger.info("MainAppController.getMainApp()");
    return mainAppService.retrieve();
  }

  /** お問い合わせ内容をデータベースに保存及び、メール送信を行います。 */
  @PostMapping
  public void postContact(@Validated @RequestBody InquiryModel inquiryModel) {
    logger.info("MainAppController.postContact()");
    DiscordWebhookModel discordWebhookModel = mainAppService.register(inquiryModel);

    if (appProperties.isWebhookuse()) {
      try {
        // DiscodeWebhook実施
        logger.info("DiscodeWebhook 送信データ生成 開始");
        logger.info(
            "【送信URL】"
                + appProperties.getDiscordUrl()
                + System.getProperty("line.separator")
                + "【問い合わせID】"
                + discordWebhookModel.getInquiryId()
                + System.getProperty("line.separator")
                + "【ユーザ名】"
                + inquiryModel.getUserName()
                + System.getProperty("line.separator")
                + "【メールアドレス】"
                + inquiryModel.getMailAddress()
                + System.getProperty("line.separator")
                + "【問い合わせ種別】"
                + discordWebhookModel.getInquiryKindName());

        DiscordWebhook discordWebhook = new DiscordWebhook(appProperties.getDiscordUrl());
        discordWebhook.setUsername("kos0514.com 自動送信");
        discordWebhook.setTts(false);
        discordWebhook.setContent("----------問合せがありました----------");
        EmbedObject embedObject = new EmbedObject();
        String sendContents = inquiryModel.getContents();
        sendContents = sendContents.replace(System.getProperty("line.separator").toString(), "");
        embedObject.addField("問い合わせID", String.valueOf(discordWebhookModel.getInquiryId()), false);
        embedObject.addField("ユーザ名", inquiryModel.getUserName(), false);
        embedObject.addField("メールアドレス", inquiryModel.getMailAddress(), false);
        embedObject.addField("問い合わせ種別", discordWebhookModel.getInquiryKindName(), false);
        embedObject.addField("問い合わせ内容", sendContents, false);
        discordWebhook.addEmbed(embedObject);
        logger.info("DiscodeWebhook 送信データ生成 終了");

        logger.info("DiscodeWebhook 開始");
        discordWebhook.execute();
        logger.info("DiscodeWebhook 終了");

      } catch (Exception e) {
        logger.error("DiscodeWebhookの送信に失敗しました。 【エラー内容】" + e.getMessage());
      }
    }
  }
}
