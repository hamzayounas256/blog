import mysql from "mysql2";

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "H@mza4527513",
	database: "blog", // replace with your database name
});
db.connect((err) => {
	if (err) {
		console.error("Database connection failed:", err.stack);
		return;
	}
	console.log("Connected to database");
});
