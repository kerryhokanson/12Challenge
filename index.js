const cTables = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
require('dotenv').config();

app = express();

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the org_db database.`)
  );

  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });