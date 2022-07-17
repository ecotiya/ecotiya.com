CREATE DATABASE IF NOT EXISTS ecotiya_com CHARACTER SET
utf8 COLLATE utf8_general_ci;

USE ecotiya_com;

SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS m_career;
DROP TABLE IF EXISTS t_inquiry_lists;
DROP TABLE IF EXISTS m_inquiry_kinds;
DROP TABLE IF EXISTS m_section_comment;
DROP TABLE IF EXISTS m_section_title;
DROP TABLE IF EXISTS m_skill;




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
	career_contents text NOT NULL COMMENT '経歴内容',
	PRIMARY KEY (career_date, career_division)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='経歴マスタ : 経歴情報を管理するマスタ';


-- 問い合わせ種別マスタ : ユーザからの問い合わせ種別を管理するマスタ。
CREATE TABLE m_inquiry_kinds
(
	inquiry_kind_code varchar(255) NOT NULL COMMENT '問い合わせ種別コード',
	inquiry_kind_name varchar(255) NOT NULL COMMENT '問い合わせ種別名称',
	PRIMARY KEY (inquiry_kind_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='問い合わせ種別マスタ : ユーザからの問い合わせ種別を管理するマスタ。';


-- セクションコメントマスタ
CREATE TABLE m_section_comment
(
	-- 表示するsection毎にキーをつける
	-- profile,skill,other
	section_kind_code varchar(255) NOT NULL COMMENT 'セクション種別コード : 表示するsection毎にキーをつける
profile,skill,other',
	section_comment_line int NOT NULL COMMENT 'セクションコメントライン',
	section_comment text NOT NULL COMMENT 'セクションコメント',
	-- 1…タイトル
	-- 0…コメント
	title_flg tinyint(1) NOT NULL COMMENT 'コメントタイトルフラグ : 1…タイトル
0…コメント',
	PRIMARY KEY (section_kind_code, section_comment_line)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='セクションコメントマスタ';


-- セクションタイトルマスタ : 各セクション(コンポーネント)のタイトル・サブタイトルを管理するためのマスタ。
CREATE TABLE m_section_title
(
	-- 表示するsection毎にキーをつける
	-- profile,skill,other
	section_kind_code varchar(255) NOT NULL COMMENT 'セクション種別コード : 表示するsection毎にキーをつける
profile,skill,other',
	section_title varchar(255) NOT NULL COMMENT 'セクションタイトル',
	section_sub_title varchar(255) NOT NULL COMMENT 'セクションサブタイトル',
	remarks1 varchar(255) COMMENT '備考1',
	remarks2 varchar(255) COMMENT '備考2',
	-- 1…表示する
	-- 0…表示しない
	show_flg tinyint(1) NOT NULL COMMENT '表示フラグ : 1…表示する
0…表示しない',
	PRIMARY KEY (section_kind_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='セクションタイトルマスタ : 各セクション(コンポーネント)のタイトル・サブタイトルを管理するためのマスタ。';


-- スキルマスタ : 私のスキル情報を管理するための一覧。
CREATE TABLE m_skill
(
	skill_field_code varchar(255) NOT NULL COMMENT 'スキル分野コード',
	skill_name varchar(255) NOT NULL COMMENT 'スキル名称',
	skill_level decimal(2,1) NOT NULL COMMENT 'スキルレベル',
	experience_ym decimal(2,1) NOT NULL COMMENT '経験年数',
	explanation varchar(255) NOT NULL COMMENT '説明',
	PRIMARY KEY (skill_field_code, skill_name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='スキルマスタ : 私のスキル情報を管理するための一覧。';


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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='問い合わせ一覧 : ユーザからの問い合わせを管理するための一覧。';



/* Create Foreign Keys */

ALTER TABLE t_inquiry_lists
	ADD FOREIGN KEY (inquiry_kind_code)
	REFERENCES m_inquiry_kinds (inquiry_kind_code)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



