// サイトコメント
export interface SiteComment {
  commentKindCode: string;
  commentLine: string;
  commentTitle?: string;
  commentContents: Text;
  commentImage?: string;
}
