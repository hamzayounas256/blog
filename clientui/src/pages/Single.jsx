import { Link, useLocation } from "react-router-dom";
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

	const postId = location.pathname.split("/")[2];
	console.log(postId);

	const { currentUser } = useContext(AuthContext);

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

	return (
		<div className="single">
			<div className="content">
				<img src={post?.img} alt="" />
				<div className="user">
					{post.UserImg && <img src={post?.UserImg} alt="" />}
					<div className="info">
						<span>{post?.username}</span>
						<p>Posted {moment(post.date).fromNow()}</p>
					</div>
					{currentUser.username === post.username && (
						<div className="edit">
							<Link to="/write">
								<img src={Edit} alt="" />
							</Link>
							<img src={Delete} alt="" />
						</div>
					)}
				</div>
				<h1>{post.title}</h1>
				{post.desc}
			</div>
			<Menu />
		</div>
	);
}
