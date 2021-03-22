DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DEC(10, 4) NOT NULL, 
    department_id INT NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)

);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (payton, whinnery, 7, 2), (rachel, amos, 4, 2), (caroline, miller, 3, 1), (jackie, hodges, 2, 2), (molly, gilbert, 1), (walter, perry, 5), (natalie, guidry, 6), (nina, whinnery, 7, 2);

INSERT INTO roles (title, salary, department_id)
VALUES (sales lead, 130000, 1), (salesperson, 100000, 1, (lead engineer, 150000, 2), (software engineer, 1500000, 2), (accountant, 120000, 3), (legal team lead, 150000, 4), (lawyer, 160000, 4);

INSERT INTO departments (department_name)
VALUES (sales), (engineering), (finance), (legal);