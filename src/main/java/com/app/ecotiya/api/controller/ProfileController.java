package com.app.ecotiya.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecotiya.api.service.ProfileService;
import com.app.ecotiya.domain.entity.MSiteComment;

@RestController
@RequestMapping("/profile")
public class ProfileController {

  private ProfileService profileService;

  public ProfileController(ProfileService profileService) {
    this.profileService = profileService;
  }

  /** プロフィールを表示するために必要なデータを取得します。 */
  @GetMapping
  public MSiteComment getProfile() {
    return profileService.retrieve();
  }
}
