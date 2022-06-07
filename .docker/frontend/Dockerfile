FROM node:18-alpine
ENV NODE_VERSION 18.2.0

ENV LANG=C.UTF-8  \
    TZ=Asia/Tokyo

# コンテナの使用ポート
EXPOSE 3000

# コンテナを勝手に終了させない設定
ENV CI=true

CMD yarn start