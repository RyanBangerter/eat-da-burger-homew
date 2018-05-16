// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: ""
});
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 's0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'z9hz48up4b7uf8uu',
    password: 'jumz8ntp74mtekft',
    database: 'qlyci408aw4qdlx2'
  });
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
