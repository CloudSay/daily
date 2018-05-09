let mysql = require('mysql')

let db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'root123',
    port:3306,
    database:'2018-03-28'
});

//  `INSERT INTO user(username,password) VALUES("bulala","bualala123")`
 let sql ='INSERT INTO `biao-test`(usename,password) VALUES("bulala","bualala123")'
db.query(sql,(err,data)=>{
    console.log(err);
    console.log(data);
})