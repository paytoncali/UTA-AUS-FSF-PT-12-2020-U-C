DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NULL,
  artist VARCHAR(50) NULL,
  genre VARCHAR(50),
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("roster", "Bailey Bryan", "Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("drivers license", "Olivia Rodriguez", "Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("Just for Now", "Maren Morris", "Country");