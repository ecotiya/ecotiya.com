package com.app.ecotiya.domain.entity.base;

import java.time.LocalDateTime;

public class AppBaseEntity {

  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
  private boolean delflg;

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(LocalDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }

  public boolean isDelflg() {
    return delflg;
  }

  public void setDelflg(boolean delflg) {
    this.delflg = delflg;
  }

  // getter,setter
  public void initCreateEntity() {
    LocalDateTime now = LocalDateTime.now();
    this.createdAt = now;
    this.updatedAt = now;
  }

  public void initUpdateEntity() {
    LocalDateTime now = LocalDateTime.now();
    this.updatedAt = now;
  }
}
