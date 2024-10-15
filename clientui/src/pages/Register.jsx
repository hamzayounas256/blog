import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
	const navigate = useNavigate();
	const [input, setinput] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setinput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:8800/api/auth/register", input);
			console.log("Registered successfully");
			navigate("/login");
		} catch (err) {
			setError(err.response.data);
		}
	};

	// console.log(input);
	return (
		<div className="auth">
			<h1>Register</h1>
			<form>
				<input
					type="text"
					placeholder="Username"
					name="username"
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
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
					Register
				</button>
				{error && <p>{error}</p>}
				<span>
					Do have an account? <Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
}
