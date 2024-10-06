import { Link } from "react-router-dom";
export default function Register() {
	return (
		<div className="auth">
			<h1>Register</h1>
			<form>
				<input type="text" placeholder="Username" required />
				<input type="email" placeholder="Email" required />
				<input type="password" placeholder="Password" required />
				<button type="submit">Register</button>
				<p>This is an error here!</p>
				<span>
					Do have an account? <Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
}
