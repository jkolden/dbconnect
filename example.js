var oracledb = require("oracledb");
var dbConfig = require("./dbconfig.js");

const connectionParams = {
  user: dbConfig.user,
  password: dbConfig.password,
  connectString: dbConfig.connectString
};

console.log(connectionParams);

oracledb.getConnection(connectionParams, function(err, connection) {
  if (err) {
    console.error("err", err.message);
    return;
  }
  console.log("Connection was successful!");

  connection.close(function(err) {
    if (err) {
      console.error(err.message);
      return;
    }
  });
});
