// MainAppインターフェース
export interface MainApps {
  sectionTitles: SectionTitles;
  sectionComments: SectionComments;
  careers: Careers;
  skills: Skills;
  inquiryKinds: InquiryKinds;
}

// セクションタイトルマスタ
export interface SectionTitles {
  sectionKindCode: string;
  sectionTitle: string;
  sectionSubTitle: string;
  remarks1?: string | undefined;
  remarks2?: string | undefined;
  showFlg: boolean;
}

// セクションコメントマスタ
export interface SectionComments {
  sectionKindCode: string;
  sectionCommentLine: number;
  sectionComment: string;
  commentTitleFlg: boolean;
}

// 経歴マスタ
export interface Careers {
  careerDate: string;
  careerDivision: string;
  careerTitle: string;
  careerContents: string;
}

// スキルマスタ
export interface Skills {
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
