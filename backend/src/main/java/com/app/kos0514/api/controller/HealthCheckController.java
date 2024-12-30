package com.app.kos0514.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/healthcheck")
public class HealthCheckController {

  /** ヘルスチェック用のパス。 */
  @GetMapping
  public String getHealthCheck() {
    return "healthcheck";
  }
}
