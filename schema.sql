DROP DATABASE IF EXISTS lending;

CREATE DATABASE lending;

USE lending;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  email VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE loans (
  id INT NOT NULL AUTO_INCREMENT,
  total DECIMAL(8,2) NOT NULL,
  paid DECIMAL(8,2),
  oustanding DECIMAL(8,2),
  apr DECIMAL (4,3) NOT NULL,
  term INT NOT NULL,
  borrower INT,
  investor INT,
  PRIMARY KEY (id),
  FOREIGN KEY (borrower) REFERENCES users(id),
  FOREIGN KEY (investor) REFERENCES users(id)
);