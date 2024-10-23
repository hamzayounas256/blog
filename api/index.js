import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "../clientui/public/upload");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});

const upload = multer({ storage });

app.post("/api/uploads", upload.single("file"), function (req, res) {
	const file = req.file;
	res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
	console.log("connected");
});
