# ecotiyaポートフォリオサイト

## URL
[https://ecotiya.com/](https://ecotiya.com/)

<br>

## 使用技術およびライブラリ

### Frontend
- [MUI](https://mui.com/) - マテリアルデザインを簡単に実現することができるデザインライブラリ。
- [React](https://reactjs.org/) - ユーザインタフェース構築のためのJavaScriptライブラリ
- [TypeScript](https://www.typescriptlang.org/) - 型定義できるJavaScript

### Backend
- [Java](https://www.java.com/) - オブジェクト指向言語
- [Spring Boot](https://spring.io/projects/spring-boot) - JVM言語の環境化で使用できるWebアプリケーションの開発をサポートするフレームワーク
- [MyBatis](https://blog.mybatis.org/) - XMLまたはアノテーションを用いてストアドプロシージャやSQL文をオブジェクトと紐付ける永続性フレームワーク
- [MySQL](https://www.mysql.com/jp/) - オープンソースのリレーショナルデータベース管理システム 

### DevOps
- [nginx](https://nginx.org/) - フリーかつオープンソースなWebサーバ
- [Docker](https://www.docker.com/) - コンテナ仮想化を用いてアプリケーションを開発・配置・実行するためのオープンプラットフォーム

### AWS
- [EC2](https://aws.amazon.com/jp/ec2/) - クラウド内の仮想サーバー(セキュリティグループ、ターゲットグループ、ロードバランサー)
- [VPC](https://aws.amazon.com/jp/vpc/) - 独立したクラウドリソース
- [ECS](https://aws.amazon.com/jp/ecs/) - 安全性と信頼性に優れ、スケーラブルなコンテナ実行方法
- [ECR](https://aws.amazon.com/jp/ecr/) - 完全マネージド型の Docker コンテナレジストリ: コンテナソフトウェアをパブリックまたはプライベートに共有およびデプロイ
- [RDS](https://aws.amazon.com/jp/rds/) - マネージド型のリレーショナルデータベースサービス
- [Secrets Manager](https://aws.amazon.com/jp/secrets-manager/) - ライフサイクルを通じてシークレットを簡単に更新、管理、取得する
- [Route 53](https://aws.amazon.com/jp/route53/) - スケーラブルな DNS とドメインネーム登録
- [IAM](https://aws.amazon.com/jp/iam/) - AWS リソースへのアクセスの管理

<br>

## プロジェクト構成

```
$PROJECT_ROOT
│   
├── .doc - ddl, insertSQL, テーブル定義書, ER図
│
├── backend - Java files
│    
├── frontend - React & Typescripts files
│    
├── mysql - 開発環境でmysqlを動かす設定
│    
├── nginx - 開発環境でnginxを動かす設定
│    
├ .env_sample - docker-composeへの環境変数注入を行う情報を記載したサンプルファイル
│
├ .gitignore - Gitでのコード管理除外フォルダ＆ファイル指定ファイル
│
├ LICENSE.md - ライセンス情報ファイル
│
├ README.md - 今、ご覧いただいている、ファイル 
│
├ docker-compose-dev.yml - 開発環境用のdocker-composeファイル
│
├ docker-compose-prod.yml - 本番環境用のdocker-composeファイル
│
├ lint-staged-around - コミット前のlinterチェックファイル
│
└ test-around - コミット前のテスト実行ファイル
```

<br>

## ローカル環境での操作方法

### ■起動
コマンドラインを起動し、プロジェクト直下に移動

#### 開発環境
docker-compose -f docker-compose-dev.yml up -d --build

#### 本番環境(ローカル)
docker-compose -f docker-compose-prod.yml up -d --build

### ■停止

#### 開発環境
docker-compose -f docker-compose-dev.yml down

#### 本番環境(ローカル)
docker-compose -f docker-compose-prod.yml down

#### 全削除

##### 開発環境
docker-compose -f docker-compose-dev.yml down --rmi all --volumes --remove-orphans

##### 本番環境(ローカル)
docker-compose -f docker-compose-prod.yml down --rmi all --volumes --remove-orphans

<br>

## License

- [MIT](https://raw.githubusercontent.com/ecotiya/ecotiya-portfolio-site/master/LICENSE.md)  

<br>

## Author

- [Github](https://github.com/ecotiya)
- [Twitter](https://twitter.com/ecotiya)