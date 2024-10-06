import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
	// Check existing user

	const q = "SELECT * FROM users WHERE email  = ? OR username = ?";
	db.query(q, [req.body.email, req.body.username], (err, data) => {
		if (err) return res.status(500).json(err);
		if (data.length) return res.status(409).json("User already exists");

		// Hash to password
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(res.body.password, salt);

		//Create a new user
		const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
		const values = [req.body.username, req.body.email, hash];
	});
};

export const login = (req, res) => {
	res.json("login successfully");
};

export const logout = (req, res) => {
	res.json("logout successfully");
};
