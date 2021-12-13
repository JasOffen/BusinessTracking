const mysql = require('mysql2')

// Connect to MySQL Database
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
},
    console.log('Connected to the employee database')
);

module.exports = db;
//db.connect(function (err) {
//    if (err) throw err;
//    console.log('Connected')
//})