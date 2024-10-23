import { db } from "../db.js";
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
	res.json("add a new post");
};

export const updatePost = (req, res) => {
	res.json("update post");
};

export const deletePost = (req, res) => {
	res.json("delete post");
};
