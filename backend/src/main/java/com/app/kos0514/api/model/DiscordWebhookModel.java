package com.app.kos0514.api.model;

import lombok.Data;

@Data
// DiscordWebhook用モデル
public class DiscordWebhookModel {

  /** お問い合わせID */
  private Long inquiryId;

  /** お問い合わせ種別名称 */
  private String inquiryKindName;
}
