CREATE DATABASE burger_db;

USE burger_db;

Drop table if EXISTS burgers;

CREATE TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);