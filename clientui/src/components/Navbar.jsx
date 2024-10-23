import { Link } from "react-router-dom";
import Logo from "../assets/img/AE.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
export default function Navbar() {
	const { currentUser, logout } = useContext(AuthContext);

	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<Link className="link" to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</div>
				<div className="links">
					<Link className="link" to="/?cat=art">
						<h6>Art</h6>
					</Link>
					<Link className="link" to="/?cat=science">
						<h6>Science</h6>
					</Link>
					<Link className="link" to="/?cat=technology">
						<h6>Technology</h6>
					</Link>
					<Link className="link" to="/?cat=cinema">
						<h6>Cinema</h6>
					</Link>
					<Link className="link" to="/?cat=design">
						<h6>Design</h6>
					</Link>
					<Link className="link" to="/?cat=food">
						<h6>Food</h6>
					</Link>
					<span>{currentUser?.username}</span>

					{currentUser ? (
						<span onClick={logout}>Logout</span>
					) : (
						<Link className="link" to="/login">
							Login
						</Link>
					)}

					<span className="write">
						<Link className="link" to="/write">
							Write
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
