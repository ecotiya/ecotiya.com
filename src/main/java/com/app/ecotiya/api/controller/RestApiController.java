package com.app.ecotiya.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestApiController {
  //    @RequestMapping (value = "/")
  //    public String index () {
  //        return "index";
  //    }

  @GetMapping("/")
  public String showAll() {
    return "Hello World.";
  }

  // TODO testコード
  @GetMapping("/hello")
  public String hello() {
    return "Hello World.";
  }
}
