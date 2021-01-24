CREATE DATABASE `locadora` /*!40100 DEFAULT CHARACTER SET utf8 */;

-- locadora.movies definition

CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `director` varchar(100) NOT NULL,
  `quantity` int(11) DEFAULT 0,
  `quantity_available` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- locadora.users definition

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `is_logged` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- locadora.retals definition

CREATE TABLE `retals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `is_returned` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `retals_FK` (`movie_id`),
  KEY `retals_FK_1` (`user_id`),
  CONSTRAINT `retals_FK` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `retals_FK_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(1, 'Titanic', 'James Cameron', 10, 10);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(2, 'Isolado na Pandemia', 'Johnny Martin', 5, 5);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(3, 'The Way Back', 'Gavin O''Connor', 10, 10);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(4, 'Monsters of Man', 'Mark Toia', 5, 5);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(5, 'Vanguard', 'Stanley Tong', 5, 5);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(6, 'Attraction 2 - A Invasão', 'Fyodor Bondarchuk', 10, 10);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(7, 'Era uma vez um sonho', 'Ron Howard', 10, 10);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(8, 'Os 7 de Chicago', 'Aaron Sorkin', 10, 10);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(9, 'O Segredo: Ouse Sonhar', 'Andy Tennant', 10, 10);
INSERT INTO movies (id, title, director, quantity, quantity_available) VALUES(10, 'Enquanto Estivermos Juntos', 'Jon Erwin', 10, 10);

