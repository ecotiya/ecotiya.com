// セクションタイトルマスタ
export interface SectionTitle {
  sectionKindCode: string;
  sectionTitle: string;
  sectionSubTitle: string;
  remarks1?: string | undefined;
  remarks2?: string | undefined;
  showFlg: boolean;
}

// セクションコメントマスタ
export interface SectionComment {
  sectionKindCode: string;
  sectionCommentLine: number;
  sectionComment: string;
  commentTitleFlg: boolean;
}

// 経歴マスタ
export interface Career {
  careerDate: string;
  careerDivision: string;
  careerTitle: string;
  careerContents: string;
}

// スキルマスタ
export interface SkillTable {
  skillId: number;
  skillFieldCode: string;
  skillName: string;
  experienceYm: number;
}

// 問い合わせ種別マスタ
export interface InquiryKinds {
  inquiryKindCode: string;
  inquiryKindName: string;
}
