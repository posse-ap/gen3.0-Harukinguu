FROM php:7-fpm
#何のイメージをベースにするかを「from」で指定する

COPY php.ini /usr/local/etc/php
#使うソースコードをコンテナ内にコピーする、これによりアプリケーションコードをコンテナにコピーできる
#php.iniファイルを、コンテナ内のetc/php/配下にコピーできる

RUN apt-get update \
  && apt-get install -y zlib1g-dev mariadb-client vim libzip-dev \
  && docker-php-ext-install zip pdo_mysql