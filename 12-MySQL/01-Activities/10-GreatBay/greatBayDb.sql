DROP DATABASE IF EXISTS greatbayDB;

CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NULL,
  price DEC(10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (item, price)
VALUES ("laptop", 900.90);

INSERT INTO items (item, price)
VALUES ("coffee table", 300.90);

