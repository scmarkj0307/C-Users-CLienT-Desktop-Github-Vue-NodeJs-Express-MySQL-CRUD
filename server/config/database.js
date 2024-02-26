const mysql = require ('mysql2');


//connection to task_manager_db
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "task_manager_db"
});

module.exports = db