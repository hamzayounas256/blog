import mysql from "mysql";

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "H@mza4527513",
	database: "blog", // replace with your database name
});
