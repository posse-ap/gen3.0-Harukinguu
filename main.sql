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
VALUES
('2022-9-1',2,1,1),
('2022-9-2',2,1,1),
('2022-9-3',2,1,1),
('2022-9-4',2,1,1),
('2022-9-5',2,1,1),
('2022-9-6',2,1,1),
('2022-9-7',2,1,1),
('2022-9-8',2,1,1),
('2022-9-9',2,1,1),
('2022-9-10',2,1,1),
('2022-9-11',2,1,1),
('2022-9-12',2,1,1),
('2022-9-13',2,1,1),
('2022-9-14',2,1,1),
('2022-9-15',2,1,1),
('2022-9-16',2,1,1),
('2022-9-17',2,1,1),
('2022-9-18',2,1,1),
('2022-9-19',2,1,1),
('2022-9-20',2,1,1),
('2022-9-21',2,1,1),
('2022-9-22',2,1,1),
('2022-9-23',2,1,1),
('2022-9-24',2,1,1),
('2022-9-25',2,1,1),
('2022-9-26',2,1,1),
('2022-9-27',2,1,1),
('2022-9-28',2,1,1),
('2022-9-29',2,1,1),
('2022-9-30',2,1,1);


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