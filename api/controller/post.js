import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
	const q = req.query.cat
		? "SELECT * FROM posts WHERE cat=?"
		: "SELECT * FROM posts";

	db.query(q, [req.query.cat], (err, data) => {
		if (err) return res.status(500).json(err);
		return res.status(200).json(data);
	});
};

export const getPost = (req, res) => {
	const q = `
		SELECT 
			p.id,
			u.username, 
			p.title, 
			p.desc, 
			p.img, 
			u.img AS userImg, 
			p.cat, 
			p.date 
		FROM users u 
		JOIN posts p ON u.id = p.uid 
		WHERE p.id = ?`;

	db.query(q, [req.params.id], (err, data) => {
		if (err) return res.status(500).json(err);
		if (data.length === 0) return res.status(404).json("Post not found");
		return res.status(200).json(data[0]);
	});
};

export const addPost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Unauthorized");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid");

		const q =
			"INSERT INTO posts (`title`,`desc`,`img`,`cat`,`date`,`uid`) VALUES (?)";

		const values = [
			req.body.title,
			req.body.desc,
			req.body.img,
			req.body.cat,
			req.body.date,
			userInfo.id,
		];

		db.query(q, [values, userInfo.id], (err, data) => {
			if (err) return res.status(403).json(err);
			return res.status(200).json("Post has been created successfully");
		});
	});
};

export const updatePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Unauthorized");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid");

		const postId = req.params.id;
		const q =
			"UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE id =? AND uid =?";

		const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

		db.query(q, [...values, postId, userInfo.id], (err, data) => {
			if (err) return res.status(403).json(err);
			return res.status(200).json("Post has been updated successfully");
		});
	});
};

export const deletePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Unauthorized");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid");

		const postId = req.params.id;
		const q = "DELETE FROM posts WHERE id =? AND uid =?";

		db.query(q, [postId, userInfo.id], (err, data) => {
			if (err)
				return res.status(403).json("You can delete only your own posts");
			if (data.affectedRows === 0)
				return res
					.status(404)
					.json("Post not found or not authorized to delete");
			return res.status(200).json("Post deleted successfully");
		});
	});
};
