const cTables = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { response } = require('express');
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

  var tableData 

  // db.query('show tables', function (err, results) {
  //   tableData = results;
  //   // console.log(tableData[4].first_name);
  //   // console.log(tableData.length)
  //   console.table(tableData);
  // });

  async function prompt(){
    inquirer
      .prompt([
        {
          message: "what would you like to do?",
          type: 'list',
          choices: ["view all employees","add employee", "view all roles", "add role", "view all departments", "add department"],
          name: "choice"
        }
      ])
      .then( response => {
        switch(response.choice){
          case "view all employees": viewAllEmployees();
          break;
          case "add employee": addEmployee();
          break;
          case "view all roles": viewAllRoles();
          break;
          case "add role": addRole();
          break;
          case "view all departments": viewAllDepartments();
          break;
          case "add department": addDepartment();
          break;
        }
      })
  }
  
  async function viewAllEmployees(){
    db.query('select * from employee', function (err,data){
      console.log("\n")
      console.table(data);
      prompt()
    })


  }
  
  async function addEmployee(){
    db.query('select * from role', function (err, res) {
      if (err) {
        console.log(err)
        return
      }
      
      let roleChoices = res.map((r) => r.title)
      // console.log(roleChoices)
      inquirer
      .prompt([
        {
          message: "what is the employees first name?",
          type: "input",
          name: "first_name",
        },
        {
          message: "what is the employees last name?",
          type: "input",
          name: "last_name"
        },
        {
          type: "list",
          message: "what is the employees role?", 
          name: "role",
          choices: roleChoices
        }
      ])
    })
   

  }
  async function viewAllRoles(){
    db.query('select * from role', function (err,data){
      console.log("\n")
      console.table(data);
      prompt();
    })

    
  }
  async function addRole(){

  }
  async function viewAllDepartments(){
    db.query('select * from department', function (err,data){
      console.log("\n")
      console.table(data);
      prompt();
    })

    
  }
  async function addDepartment(){

  }

  prompt()