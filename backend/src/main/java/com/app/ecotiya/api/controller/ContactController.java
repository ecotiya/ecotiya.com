package com.app.ecotiya.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contact")
public class ContactController {

  /** お問い合わせページを表示するために必要なデータを取得します。 */
  @GetMapping
  public String getContact() {
    return "contact";
  }

  /** お問い合わせページの内容をデータベースに保存及び、メール送信を行います。 */
  @PostMapping
  public String postContact() {
    return "postContact";
  }
}
