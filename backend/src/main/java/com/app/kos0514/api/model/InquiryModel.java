package com.app.kos0514.api.model;

import lombok.Data;

@Data
// お問い合わせモデル
public class InquiryModel {

  /** 名前 */
  private String userName;

  /** メールアドレス */
  private String mailAddress;

  /** 問い合わせ種別コード */
  private String inquiryKindCode;

  /** 内容 */
  private String contents;
}
