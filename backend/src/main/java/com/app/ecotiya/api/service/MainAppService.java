package com.app.ecotiya.api.service;

import com.app.ecotiya.api.model.InquiryModel;
import com.app.ecotiya.api.model.MainAppModel;

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
  void register(InquiryModel inquiryModel);
}
