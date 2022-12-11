DROP DATABASE IF EXISTS org_db;

CREATE DATABASE org_db;

USE org_db;

CREATE TABLE department (
    id INT  not null AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE role(
    id INT not null AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
    ON DELETE SET NULL
);
CREATE TABLE employee(
    id INT not null AUTO_INCREMENT PRIMARY KEY , 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);

