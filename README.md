# ecotiya公式サイト

## ローカル環境での操作方法

### ■起動
コマンドラインを起動し、プロジェクト直下に移動
docker-compose up -d --build

#### 開発環境
docker compose -f docker-compose-dev.yml up -d

#### 本番環境
docker compose -f docker-compose-prod.yml up -d


### ■停止

#### 開発環境
docker compose -f docker-compose-dev.yml down

#### 本番環境
docker compose -f docker-compose-prod.yml down

#### 全削除
docker-compose -f docker-compose-dev.yml down --rmi all --volumes --remove-orphans
docker-compose -f docker-compose-prod.yml down --rmi all --volumes --remove-orphans