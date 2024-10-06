import { Link } from "react-router-dom";
export default function login() {
	return (
		<div className="auth">
			<h1>Login</h1>
			<form>
				<input type="text" placeholder="Username" required />
				<input type="password" placeholder="Password" required />
				<button type="submit">Login</button>
				<p>This is an error here!</p>
				<span>
					Don&apos;t have an account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
}
