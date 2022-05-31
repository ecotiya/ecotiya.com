package com.app.ecotiya.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecotiya.api.model.CareerModel;
import com.app.ecotiya.api.service.CareerService;

@RestController
@RequestMapping("/career")
public class CareerController {

  private CareerService careerService;

  public CareerController(CareerService careerService) {
    this.careerService = careerService;
  }

  /** 経歴を表示するために必要なデータを取得します。 */
  @GetMapping
  public CareerModel getCareer() {
    return careerService.retrieve();
  }
}
