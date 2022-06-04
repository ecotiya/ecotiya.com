package com.app.ecotiya.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecotiya.api.model.MainAppModel;
import com.app.ecotiya.api.service.MainAppService;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class MainAppController {

  private MainAppService mainAppService;

  public MainAppController(MainAppService mainAppService) {
    this.mainAppService = mainAppService;
  }

  /** メインページを表示するために必要なデータを取得します。 */
  @GetMapping
  public MainAppModel getMainApp() {
    return mainAppService.retrieve();
  }

  // TODO
  /** お問い合わせ内容をデータベースに保存及び、メール送信を行います。 */
  @PostMapping
  public String postContact() {
    return "postContact";
  }
}
