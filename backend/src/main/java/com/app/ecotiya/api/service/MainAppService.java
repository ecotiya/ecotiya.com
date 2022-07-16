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
   * @param お問い合わせモデル
   */
  void register(InquiryModel inquiryModel);
}
