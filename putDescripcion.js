const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.put('/rest/descripcion', function (req, res) {
   connection.query('UPDATE `Descripcion` SET `Descripcion`=?, `Id_Articulo`=? ,`Estatus`=? where `Id_Descripcion`=?', [req.body.Descripcion,req.body.Id_Articulo,req.body.Estatus,req.body.Id_Descripcion],function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


app.listen(2468, function () {
 console.log('Node app is running on port 2468');

});  