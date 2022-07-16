package com.app.ecotiya.api.model;

import java.util.List;

import com.app.ecotiya.domain.entity.MCareer;
import com.app.ecotiya.domain.entity.MInquiryKinds;
import com.app.ecotiya.domain.entity.MSectionComment;
import com.app.ecotiya.domain.entity.MSectionTitle;
import com.app.ecotiya.domain.entity.MSkill;

import lombok.Data;

@Data
// アプリ表示データ格納モデル
public class MainAppModel {

  /** セクションタイトルマスタ一覧 */
  private List<MSectionTitle> sectionTitleList;

  /** セクションコメントマスタ一覧 */
  private List<MSectionComment> sectionCommentList;

  /** 経歴マスタ一覧 */
  private List<MCareer> careerList;

  /** スキルマスタ一覧 */
  private List<MSkill> skillList;

  /** 問い合わせ種別マスタ一覧 */
  private List<MInquiryKinds> inquiryKindsList;
}
