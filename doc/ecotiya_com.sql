SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS m_career;
DROP TABLE IF EXISTS t_inquiry_lists;
DROP TABLE IF EXISTS m_inquiry_kinds;
DROP TABLE IF EXISTS m_site_comment;
DROP TABLE IF EXISTS m_skill;
DROP TABLE IF EXISTS m_skill_division;




/* Create Tables */

-- 経歴マスタ : 経歴情報を管理するマスタ
CREATE TABLE m_career
(
	-- yyyy/mm
	career_date varchar(7) NOT NULL COMMENT '年月 : yyyy/mm',
	-- 数値でフロントのiconを変更したい。
	-- 1:School
	-- 2:Business
	-- 3:Private
	career_division varchar(1) NOT NULL COMMENT '経歴種別 : 数値でフロントのiconを変更したい。
1:School
2:Business
3:Private',
	career_title varchar(255) NOT NULL COMMENT '経歴タイトル',
	career_contents varchar(255) NOT NULL COMMENT '経歴内容',
	PRIMARY KEY (career_date, career_division)
) COMMENT = '経歴マスタ : 経歴情報を管理するマスタ';


-- 問い合わせ種別マスタ : ユーザからの問い合わせ種別を管理するマスタ。
CREATE TABLE m_inquiry_kinds
(
	inquiry_kind_code varchar(255) NOT NULL COMMENT '問い合わせ種別コード',
	inquiry_kind_name varchar(255) NOT NULL COMMENT '問い合わせ種別名称',
	PRIMARY KEY (inquiry_kind_code)
) COMMENT = '問い合わせ種別マスタ : ユーザからの問い合わせ種別を管理するマスタ。';


-- サイトコメントマスタ : サイトで表示するコメントを管理するためのマスタ。プロフィールやこのサイトについて等のコメントを
CREATE TABLE m_site_comment
(
	-- 表示するsection毎にキーをつける
	-- profile,skill,other
	comment_kind_code varchar(255) NOT NULL COMMENT 'サイトコメント種別コード : 表示するsection毎にキーをつける
profile,skill,other',
	-- profile,skillなど、コメントを1つしか使用しないものについては、1固定
	-- 新たにsectionを追加し、そのsection内で複数のコメントを使用する場合に、コメント行の数値を増やすことで、マルチコメントの対応をする。
	comment_line int NOT NULL COMMENT 'コメント行 : profile,skillなど、コメントを1つしか使用しないものについては、1固定
新たにsectionを追加し、そのsection内で複数のコメントを使用する場合に、コメント行の数値を増やすことで、マルチコメントの対応をする。',
	-- profile,skillなど、コンポーネント内でタイトルをつける必要がないものには不要。
	-- 新たにsectionを追加し、そのsection内でタイトルをつける必要があれば利用。
	comment_title varchar(255) COMMENT 'サイトコメントタイトル : profile,skillなど、コンポーネント内でタイトルをつける必要がないものには不要。
新たにsectionを追加し、そのsection内でタイトルをつける必要があれば利用。',
	-- コメントを記載
	comment_contents text NOT NULL COMMENT 'サイトコメント内容 : コメントを記載',
	-- 画像のURLを保管する予定。
	-- テーブルの中身を変更するだけで、画像を動的に変更可能にしておきたい。
	comment_image varchar(255) COMMENT '画像 : 画像のURLを保管する予定。
テーブルの中身を変更するだけで、画像を動的に変更可能にしておきたい。',
	PRIMARY KEY (comment_kind_code, comment_line)
) COMMENT = 'サイトコメントマスタ : サイトで表示するコメントを管理するためのマスタ。プロフィールやこのサイトについて等のコメントを';


-- スキルマスタ : 私のスキル情報を管理するための一覧。
CREATE TABLE m_skill
(
	skill_id int NOT NULL COMMENT 'スキルID',
	skill_division_id int NOT NULL COMMENT 'スキル種別ID',
	experience_ym decimal(2,1) NOT NULL COMMENT '経験年数',
	PRIMARY KEY (skill_id)
) COMMENT = 'スキルマスタ : 私のスキル情報を管理するための一覧。';


-- スキル種別マスタ : スキルの分類や言語を管理するためのマスタ。
CREATE TABLE m_skill_division
(
	skill_division_id int NOT NULL COMMENT 'スキル種別ID',
	skill_division_name varchar(255) NOT NULL COMMENT 'スキル種別名称',
	skill_field_code varchar(255) NOT NULL COMMENT 'スキル分野コード',
	PRIMARY KEY (skill_division_id)
) COMMENT = 'スキル種別マスタ : スキルの分類や言語を管理するためのマスタ。';


-- 問い合わせ一覧 : ユーザからの問い合わせを管理するための一覧。
CREATE TABLE t_inquiry_lists
(
	inquiry_id bigint NOT NULL AUTO_INCREMENT COMMENT '問い合わせID',
	user_name varchar(255) NOT NULL COMMENT '名前',
	mail_address varchar(255) NOT NULL COMMENT 'メールアドレス',
	inquiry_kind_code varchar(255) NOT NULL COMMENT '問い合わせ種別コード',
	contents text NOT NULL COMMENT '内容',
	create_at datetime NOT NULL COMMENT '登録日時',
	PRIMARY KEY (inquiry_id)
) COMMENT = '問い合わせ一覧 : ユーザからの問い合わせを管理するための一覧。';



/* Create Foreign Keys */

ALTER TABLE t_inquiry_lists
	ADD FOREIGN KEY (inquiry_kind_code)
	REFERENCES m_inquiry_kinds (inquiry_kind_code)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE m_skill
	ADD FOREIGN KEY (skill_division_id)
	REFERENCES m_skill_division (skill_division_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



