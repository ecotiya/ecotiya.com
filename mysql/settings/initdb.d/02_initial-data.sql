insert into ecotiya_com.m_career(career_date,career_division,career_title,career_contents) values 
    ('2013/04','1','情報系専門学校','情報系専門学校')
  , ('2016/01','2','自社開発企業インターン','自社開発企業インターン')
  , ('2016/04','2','自社開発企業','自社開発企業')
  , ('2017/12','2','金稼ぎのため、アルバイト','丸亀製麺および、郵便局の深夜アルバイト')
  , ('2018/01','2','受託開発企業','受託開発企業')
  , ('2020/05','2','SES企業','SES企業')
  , ('2022/05','2','フリーランスエンジニア','フリーランスエンジニア');


insert into ecotiya_com.m_inquiry_kinds(inquiry_kind_code,inquiry_kind_name,sortno) values 
    ('official_site','本サイトについて',4)
  , ('others','その他',3)
  , ('question','ご質問',2)
  , ('request','ご要望',1);


insert into ecotiya_com.m_section_comment(section_kind_code,section_comment_line,section_comment,title_flg) values 
    ('career',1,'社会における小さな課題を解決できるエンジニアになる。','1')
  , ('career',2,'

【経緯】
高校生の当時、自転車で祖母の家へ通っていた私は、祖母との会話の中で、病院での待ち時間が長く疲れるという話を聞いていました。

やりたいことがなく、進路に迷っていた私はふと、祖母の話を思い出し、インターネットで検索した際に、電子カルテシステムというものがあることを知りました。
それがきっかけで、パソコンが好きという理由もあわさり、情報系専門学校に進学します。

そのシステムは紙ではなく、データで医療情報を管理しており、紙カルテを保管場所から探し出す行為の削減や書類作成の簡略化により、
診療業務や事務対応の効率化が図れる可能性があり、それは祖母のようなお年寄りの方々を幸せにする可能性があるシステムでした。


【理由】
これは私がエンジニアとなった話の始まりですが、私は大きな野望を持つのではなく、まずは小さな課題を解決することを目指します。

今までもプロジェクトの中で可能なものではあれば積極的に提案をし、それを顧客へ提供してきた実績があります。

まずは若いうちは大きな野望を持つ前に、小さな提案から積み重ねることに注力する。
やがて自身を身に着け、サービス自体を提案してみるようになる。

自分がユーザー視点になって考えたときに、本当に心から使いたいかを考えられる、心の通ったシステムを作るエンジニアを目指します。','0')
  , ('profile',1,'医療系の自社開発会社及び、受託開発会社にてシステム開発を5年以上経験があります。要件定義、基本設計、詳細設計、開発、保守、運用とシステム構築に関わる上流工程から下流工程までフェーズを通して経験しており、手を動かすエンジニアとして、業務を遂行してまいりました。
過去7言語を利用した実装経験があり、技術的な部分へのキャッチアップの速さには自信があります。','0')
  , ('skill',1,'プライベートでのみ触れたことがある。','0')
  , ('skill',2,'プロダクトでコミットしたことがある。定常的には開発していない。','0')
  , ('skill',3,'プロダクトでコミットしたことがある or 定常的に開発していたことがある。トラブルシュートもある程度は聞きながら対応可能。','0')
  , ('skill',4,'自分で開発可能、トラブルシュートも対応可能、人に教えることも可能。','0')
  , ('skill',5,'深いレベルでの知識を有しており、コードレベルで理解している。','0');


insert into ecotiya_com.m_section_title(section_kind_code,section_title,section_sub_title,remarks1,remarks2,show_flg) values 
    ('career','【経歴】','エンジニア人生を開始してから、今日までの歩みです。ぜひ、ご覧ください。',null,null,'1')
  , ('contact','【お問い合わせ】','ここまで、ご覧いただきありがとうございます。私への問い合わせは、下記フォームもしくはTwitterのDMをご利用ください。',null,null,'1')
  , ('profile','【私について】','エンジニア「ecotiya」のポートフォリオサイトです。あなたに、私のことを知ってもらうために、経歴・スキルをまとめています。気軽にご覧ください。','/assets/ecotiya.png','ecotiya','1')
  , ('skill','【スキルセット】','私のスキルセットを下記テーブルにまとめました。テーブルの表示内容は[経験年数 降順] [レベル 降順]でソートしており、レベル1の技術に関しては今後、強みとしていきたい、勉強中の技術です。',null,null,'1');


insert into ecotiya_com.m_skill(skill_field_code,skill_name,category,skill_level,experience_ym) values 
    ('Backend','.NET Framework','フレームワーク',3,1.5)
  , ('Backend','C#','プログラミング言語',2,0.5)
  , ('Backend','Caché','データベース',3,1.5)
  , ('Backend','Java','プログラミング言語',4,4.0)
  , ('Backend','Microsoft SQL Server','データベース',2,0.5)
  , ('Backend','MySQL','データベース',4,2.0)
  , ('Backend','Oracle Database','データベース',2,0.5)
  , ('Backend','Perl','プログラミング言語',2,0.5)
  , ('Backend','PHP','プログラミング言語',2,0.5)
  , ('Backend','PostgreSQL','データベース',4,2.0)
  , ('Backend','PowerShell','スクリプト言語',3,0.5)
  , ('Backend','Spring Boot','フレームワーク',4,3.0)
  , ('Backend','VB.NET','プログラミング言語',3,1.5)
  , ('Backend','VBA(Visual Basic for Applications)','プログラミング言語',4,1.0)
  , ('DevOps','Amazon Web Services','クラウド',1,0.5)
  , ('DevOps','Apache Subversion','バージョン管理',3,1.5)
  , ('DevOps','Docker','コンテナ',1,0.5)
  , ('DevOps','Docker Compose','コンテナ',1,0.5)
  , ('DevOps','Git','バージョン管理',3,3.0)
  , ('DevOps','GitHub','バージョン管理',3,3.0)
  , ('DevOps','nginx','Webサーバ',1,0.5)
  , ('DevOps','Vagrant','仮想環境',2,0.5)
  , ('Frontend','Apache Velocity','テンプレートエンジン',4,2.0)
  , ('Frontend','JavaScript','スクリプト言語',3,2.0)
  , ('Frontend','jQuery','JavaScriptライブラリ',3,1.5)
  , ('Frontend','JSP(JavaServer Page)','テンプレートエンジン',4,1.0)
  , ('Frontend','MUI(‎Material-UI)','デザインライブラリ',1,0.5)
  , ('Frontend','React','JavaScriptライブラリ',1,0.5)
  , ('Frontend','TypeScript','プログラミング言語',1,0.5);
