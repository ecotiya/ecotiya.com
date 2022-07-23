package com.app.ecotiya.api.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class AppProperties {

  @Value("${app.webhook.isWebhookuse}")
  private boolean isWebhookuse;

  @Value("${app.webhook.discordurl}")
  private String discordUrl;
}
