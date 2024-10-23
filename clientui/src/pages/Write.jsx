import { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";

export default function Write() {
	const [value, setValue] = useState("");
	const [title, setTitle] = useState("");
	const [file, setFile] = useState(null);
	const [cat, setCat] = useState("");

	const upload = async (e) => {
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await axios.post("/uploads", formData);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const imgUrl = upload();
		try {
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="add">
			<div className="content">
				<input
					type="text"
					placeholder="title"
					className=""
					name=""
					id=""
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div className="editorContainer">
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
						preserveWhitespace={true}
						modules={{
							clipboard: {
								matchVisual: false,
							},
						}}
					/>
				</div>
			</div>
			<div className="menu">
				<div className="item">
					<h1>Publish</h1>
					<span>
						<b>Status: </b> Draft
					</span>
					<span>
						<b>Visibility: </b> Public
					</span>
					<label className="file" htmlFor="file">
						Upload Image
					</label>
					<input
						type="file"
						name=""
						id="file"
						style={{ display: "none" }}
						onChange={(e) => {
							setFile(e.target.files[0]);
						}}
					/>
					<div className="buttons">
						<button>Save as a draft</button>
						<button onClick={handleClick}>Publish</button>
					</div>
				</div>
				<div className="item">
					<h1>Category</h1>
					<div className="cat">
						<input
							type="radio"
							name="cat"
							value="art"
							id="art"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="art">Art</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							name="cat"
							value="science"
							id="science"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="science">Science</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							name="cat"
							value="technology"
							id="technology"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="technology">Technology</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							name="cat"
							value="cinema"
							id="cinema"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="cinema">Cinema</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							name="cat"
							value="design"
							id="design"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="design">Design</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							name="cat"
							value="food"
							id="food"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="food">Food</label>
					</div>
				</div>
			</div>
		</div>
	);
}
