-- Nombre de la base de datos  = tasksdb 
-- Contraseña y mas datos de la db = "./server/db.js"



-----
-- Tabla principal:

CREATE TABLE tasks (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(200) NOT NULL,
description VARCHAR(300), 
done BOOLEAN NOT NULL DEFAULT 0,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-----