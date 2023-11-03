const mysql = require('mysql');

var connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projectsem_4',
});

connect.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connect success");
    }
})

module.exports = connect;
