DROP DATABASE IF EXISTS ninaDB;

CREATE DATABASE ninaDB;

USE ninaDB;

CREATE TABLE favoriteItems (
  id INT NOT NULL AUTO_INCREMENT,
  toy VARCHAR(45) NULL,
  activity VARCHAR(45) NULL,
  food VARCHAR(45) NULL,

  PRIMARY KEY (id)
);

INSERT INTO favoriteItems (toy, activity, food)
VALUES ("piggy", "cuddling", "watermelon");

INSERT INTO favoriteItems (toy, activity, food)
VALUES ("rope", "dog park", "greenies");

INSERT INTO favoriteItems (toy, activity, food)
VALUES ("foxy", "watching squirrels", "peanut butter");