// import axios from "axios";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// export default function Login() {
// 	const navigate = useNavigate();
// 	const [input, setinput] = useState({
// 		username: "",
// 		password: "",
// 	});

// 	const [error, setError] = useState(null);

// 	const handleChange = (e) => {
// 		setinput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			await axios.post("/auth/login", input);
// 			console.log("Successful login");
// 			navigate("/");
// 		} catch (err) {
// 			setError(err.response);
// 		}
// 	};
// 	return (
// 		<div className="auth">
// 			<h1>Login</h1>
// 			<form>
// 				<input
// 					type="text"
// 					placeholder="Username"
// 					name="username"
// 					onChange={handleChange}
// 					required
// 				/>
// 				<input
// 					type="password"
// 					placeholder="Password"
// 					name="password"
// 					onChange={handleChange}
// 					required
// 				/>
// 				<button onClick={handleSubmit} type="submit">
// 					Login
// 				</button>
// 				{error && <p>{error}</p>}
// 				<span>
// 					Don&apos;t have an account? <Link to="/register">Register</Link>
// 				</span>
// 			</form>
// 		</div>
// 	);
// }

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const [input, setInput] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setInput((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null); // Reset the error before attempting login
		setLoading(true); // Start loading when form is submitted
		try {
			// await axios.post("/auth/login", input);
			await login(input);
			console.log("Successful login");
			navigate("/");
		} catch (err) {
			setError(
				// console.log(err.response.data)
				err.response?.data || "Something went wrong. Please try again."
			);
		} finally {
			setLoading(false); // Stop loading after the request is complete
		}
	};

	return (
		<div className="auth">
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					name="username"
					value={input.username}
					onChange={handleChange}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={input.password}
					onChange={handleChange}
					required
				/>
				<button type="submit" disabled={loading}>
					{loading ? "Logging in..." : "Login"}
				</button>
				{error && <p className="error">{error}</p>}
				<span>
					Don&apos;t have an account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
}
