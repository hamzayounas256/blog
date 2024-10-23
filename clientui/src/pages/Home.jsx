import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

// const posts = [
// 	{
// 		id: 1,
// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
// 		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
// 		img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 	},
// 	{
// 		id: 2,
// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
// 		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
// 		img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 	},
// 	{
// 		id: 3,
// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
// 		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
// 		img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 	},
// 	{
// 		id: 4,
// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
// 		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
// 		img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 	},
// ];

export default function Home() {
	const [posts, setPosts] = useState([]);
	const cat = useLocation().search;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts${cat}`);
				setPosts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [cat]);

	return (
		<div className="home">
			<div className="posts">
				{posts.map((item) => (
					<div className="post" key={item.id}>
						<div className="img">
							<img src={item.img} alt="" />
						</div>
						<div className="content">
							<Link className="link" to={`/post/${item.id}`}>
								<h1>{item.title}</h1>
							</Link>
							<p>{item.desc}</p>
							<button>Read more</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
