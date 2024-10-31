import "dotenv/config";
import * as mysql from "mysql2";

let pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB
});

mp.events.add("playerJoin", (player) => {
    console.log(player.name, "has joined the server");
    player.notify("Welcome to the server!");
});
