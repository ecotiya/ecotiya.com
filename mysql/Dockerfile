FROM mysql:8.0

# 指定の場所にログを記録するディレクトリを作る
RUN mkdir /var/log/mysql
# 指定の場所にログを記録するファイルを作る
RUN touch /var/log/mysql/mysqld.log

# 設定ファイルをコンテナにコピー
COPY ./settings/conf.d/my.cnf /etc/mysql/conf.d/my.cnf

# 設定ファイルの権限を変更
RUN chmod 644 /etc/mysql/conf.d/my.cnf

COPY ./settings/initdb.d /docker-entrypoint-initdb.d

EXPOSE 3310

CMD ["mysqld"]