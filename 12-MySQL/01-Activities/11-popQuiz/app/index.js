const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "14ninagirl!",
    database: "ninaDB"
});

connection.connect((err)=>{
    if (err) throw err;
    connection.query("SELECT * FROM favoriteItems", (err, result)=>{
        if (err) throw err;
        console.log("result: ", result);
        connection.end();
    });
});