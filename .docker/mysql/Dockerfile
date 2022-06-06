FROM mysql:8.0

EXPOSE 3306

# ログの保管場所の作成
#RUN touch /var/log/mysql/mysql.log

# 設定ファイルをコンテナにコピー
COPY ./settings/conf.d/my.cnf /etc/mysql/conf.d
# # 設定ファイルの権限を変更
# RUN chmod 644 /etc/mysql/my.cnf

# COPY ./sql_init /docker-entrypoint-initdb.d