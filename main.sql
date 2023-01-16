DROP DATABASE IF EXISTS webapp;   --既に存在していたら、データベースを削除しておく
CREATE DATABASE webapp;           --データベース作成
USE webapp;                       --webappを使用する

--学習記録のテーブル

DROP TABLE IF EXISTS records;
CREATE TABLE records (
  id INT NOT NULL AUTO_INCREMENT, --連番、null禁止
  'study_date' DATETIME NOT NULL, --日付の形で。null禁止
  'study_time' INT NOT NULL,
  'language_id' INT NOT NULL,     -- 1~8
  'content_id' INT NOT NULL,      -- 1~3
  PRIMARY KEY (id),               --主キー
);

INSERT INTO records(study_date,study_time,language_id,content_id)
VALUES    --下のは、全部ダミーデータ
('2023-1-1',2,1,1),
('2023-1-2',2,1,1),
('2023-1-3',2,1,1),
('2023-1-4',2,1,1),
('2023-1-5',2,1,1),
('2023-1-6',2,1,1),
('2023-1-7',2,1,1),
('2023-1-8',2,1,1),
('2023-1-9',2,1,1),
('2023-1-10',2,1,1),
('2023-1-11',2,1,1),
('2023-1-12',2,1,1),
('2023-1-13',2,1,1),
('2023-1-14',2,1,1),
('2023-1-15',2,1,1),
('2023-1-16',2,1,1),
('2023-1-17',2,1,1),
('2023-1-18',2,1,1),
('2023-1-19',2,1,1),
('2023-1-20',2,1,1),
('2023-1-21',2,1,1),
('2023-1-22',2,1,1),
('2023-1-23',2,1,1),
('2023-1-24',2,1,1),
('2023-1-25',2,1,1),
('2023-1-26',2,1,1),
('2023-1-27',2,1,1),
('2023-1-28',2,1,1),
('2023-1-29',2,1,1),
('2023-1-30',2,1,1);


--学習言語のテーブル

DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT NOT NULL AUTO_INCREMENT,
  language VARCHAR(255) NOT NULL,
  PRIMARY KEY(id);
)

INSERT INTO languages(language)
VALUES
('HTML'),
('CSS'),
('Javascript'),
('PHP'),
('Laravel'),
('SQL'),
('SHELL'),
('その他');


--学習コンテンツのテーブル

DROP TABLE IF EXISTS contents;
CREATE TABLE contens (
  id INT NOT NULL AUTO_INCREMENT,
  content VARCHAR(255) NOT NULL,
  PRIMARY KEY(id);
)

INSERT INTO languages(language)
VALUES
('N予備校'),
('課題'),
('ドットインストール');