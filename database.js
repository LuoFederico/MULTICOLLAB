/*
var mysql = require('mysql');
 
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
 
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   
    var sql = require("mssql");
 
    // config for your database
    var config = {
        user: 'MARASIGAN.JOSHUA',
        password: 'AWWWWR6R+',
        server: '213.140.22.237\\SQLEXPRESS', 
        database: 'MARASIGAN.JOSHUA', 
    };
 
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
 
        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Azienda', function (err, recordset) {
            
            if (err) console.log(err)
 
            // send records as a response
            console.log(recordset);
            
        });
    });
});
/*
 function fetchData(response){
executeQuery("Select * from Table",function (result){
  console.log(result);
  response.write('<table><tr>');
  for(var column in result[0]){
      response.write('<td><laberl>'+column+'</label></td')
   }
} 
} 
*/
var server = app.listen(5000, function () {
   
    console.log('Server is running..');
});
 
