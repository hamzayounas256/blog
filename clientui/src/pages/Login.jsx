import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
	const navigate = useNavigate();
	const [input, setinput] = useState({
		username: "",
		password: "",
	});

	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setinput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:8800/api/auth/login", input);
			console.log("Successful login");
			navigate("/");
		} catch (err) {
			setError(err.response);
		}
	};
	return (
		<div className="auth">
			<h1>Login</h1>
			<form>
				<input
					type="text"
					placeholder="Username"
					name="username"
					onChange={handleChange}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					onChange={handleChange}
					required
				/>
				<button onClick={handleSubmit} type="submit">
					Login
				</button>
				{error && <p>{error}</p>}
				<span>
					Don&apos;t have an account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
}
