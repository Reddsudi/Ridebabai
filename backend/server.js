const mysql = require('mysql')

const con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"login"
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
  var sql="INSERT INTO login(id,name,email,password) VALUES ('1','abhijeeth','abhi.sudini@gmail.com','kiraakman')";
  con.query(sql,function(err,result){
    if (err) throw err;
    console.log("1 record inserted")
  });
  
});