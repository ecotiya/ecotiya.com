// MainAppインターフェース
export interface MainApps {
  sectionTitleList: SectionTitles[];
  sectionCommentList: SectionComments[];
  careerList: Careers[];
  skillList: Skills[];
  inquiryKindsList: InquiryKinds[];
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
  titleFlg: boolean;
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
  skillFieldCode: string;
  skillName: string;
  category: string;
  skillLevel: number;
  experienceYm: number;
}

// 問い合わせ種別マスタ
export interface InquiryKinds {
  inquiryKindCode: string;
  inquiryKindName: string;
  sortno: number;
}

// 問い合わせモデル
export interface InquiryModel {
  userName: string;
  mailAddress: string;
  inquiryKindCode: string;
  contents: string;
}
