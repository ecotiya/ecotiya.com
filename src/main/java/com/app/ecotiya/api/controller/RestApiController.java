package com.app.ecotiya.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestApiController {

  /** メインページを表示するために必要なデータを取得します。 */
  @GetMapping("/")
  public String mainApp() {
    return "mainApp";
  }

  /** お問い合わせページを表示するために必要なデータを取得します。 */
  @GetMapping("/contact")
  public String contact() {
    return "contact";
  }

  /** お問い合わせページの内容をデータベースに保存及び、メール送信を行います。 */
  @GetMapping("/contact/post")
  public String postContact() {
    return "postContact";
  }

  // TODO
  @GetMapping("/hello")
  public String hello() {
    return "Hello World.";
  }
}
