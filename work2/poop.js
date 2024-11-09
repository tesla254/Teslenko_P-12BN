const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('db.sqlite3');
let row =  db.all(
    "SELECT * FROM `users`"
    );

console.log(row);

db.close();
