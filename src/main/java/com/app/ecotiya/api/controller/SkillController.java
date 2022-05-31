package com.app.ecotiya.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecotiya.api.model.SkillModel;
import com.app.ecotiya.api.service.SkillService;

@RestController
@RequestMapping("/skill")
public class SkillController {

  private SkillService skillService;

  public SkillController(SkillService skillService) {
    this.skillService = skillService;
  }

  /** スキルセットを表示するために必要なデータを取得します。 */
  @GetMapping
  public SkillModel getSkill() {
    return skillService.retrieve();
  }
}
