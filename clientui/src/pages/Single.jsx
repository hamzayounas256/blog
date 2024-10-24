import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import Menu from "../components/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../Context/AuthContext";

export default function Single() {
	const [post, setPost] = useState({});

	const location = useLocation();

	const navigate = useNavigate();

	const postId = location.pathname.split("/")[2];

	const { currentUser } = useContext(AuthContext);

	const getText = (html) => {
		const parser = new DOMParser().parseFromString(html, "text/html");
		return parser.body.textContent || "";
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts/${postId}`);
				setPost(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [postId]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${postId}`);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="single">
			<div className="content">
				<img src={`../upload/${post?.img}`} alt="" />
				<div className="user">
					{post.UserImg && <img src={post.UserImg} alt="" />}
					<div className="info">
						<span>{post.username}</span>
						<span>Posted {moment(post.date).fromNow()}</span>
					</div>
					{currentUser?.username === post?.username && (
						<div className="edit">
							<Link to="/write?edit=2" state={post}>
								<img src={Edit} alt="" />
							</Link>
							<img onClick={handleDelete} src={Delete} alt="" />
						</div>
					)}
				</div>
				<h1>{post.title}</h1>
				{getText(post.desc)}
			</div>
			<Menu cat={post.cat} />
		</div>
	);
}
