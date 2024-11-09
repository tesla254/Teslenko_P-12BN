const mysql = require("mysql2");
const db_connection = mysql
.createConnection({
host: "localhost", // имя хоста
user: "root", // имя пользователя
database: "group_familia", // имя базы данных
password: "admin", // пароль от базы данных
})
.on("error", (err) => {
console.log("Failed to connect to Database - ", err);
});
module.exports = db_connection;