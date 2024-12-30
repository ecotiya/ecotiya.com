package com.app.kos0514.api.service;

import com.app.kos0514.api.model.DiscordWebhookModel;
import com.app.kos0514.api.model.InquiryModel;
import com.app.kos0514.api.model.MainAppModel;

public interface MainAppService {

  /**
   * メインページを表示するために必要なデータを取得します。
   *
   * @return アプリ表示データ格納モデル
   */
  MainAppModel retrieve();

  /**
   * お問い合わせ内容をデータベースに保存します。
   *
   * @param userName 名前
   * @param mailAddress メールアドレス
   * @param inquiryKindCode 問い合わせ種別コード
   * @param contents 内容
   */
  DiscordWebhookModel register(InquiryModel inquiryModel);
}
