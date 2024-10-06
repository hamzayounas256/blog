import { Link } from "react-router-dom";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import Menu from "../components/Menu";

export default function Single() {
	return (
		<div className="single">
			<div className="content">
				<img
					src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt=""
				/>
				<div className="user">
					<img
						src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
					<div className="info">
						<span>Hamza</span>
						<p>Posted 2 days ago</p>
					</div>
					<div className="edit">
						<Link to="/write">
							<img src={Edit} alt="" />
						</Link>
						<img src={Delete} alt="" />
					</div>
				</div>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
					perferendis ex! Cumque, eaque explicabo! Expedita dolorum accusantium
					quas officia! Similique beatae optio, earum consequatur quos
					reprehenderit quam commodi. Recusandae, itaque. Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Explicabo a ipsam nam? Nobis
					dolorum sunt doloribus ea tenetur quae repudiandae voluptatibus quis?
					Facilis, nisi. Earum voluptate consequatur porro ipsa voluptates.
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores
					facilis obcaecati dolor accusantium nam sit doloremque. Provident ipsa
					temporibus voluptates suscipit, accusantium nisi quidem, repellat
					soluta, excepturi quisquam sequi!
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ducimus.
					Ipsam, tempore nulla illo ratione vel a sit necessitatibus inventore
					dolor officiis rem doloremque. Repellat cumque at qui nemo placeat.
					<br />
					<br />
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry&apos;s standard dummy text
					ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not
					only five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
					<br />
					<br />
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
					Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
					the theory of ethics, very popular during the Renaissance. The first
					line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
					from a line in section 1.10.32. <br />
					<br />
					The standard chunk of Lorem Ipsum used since the 1500s is reproduced
					below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
					Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in
					their exact original form, accompanied by English versions from the
					1914 translation by H. Rackham.
				</p>
			</div>
			<Menu />
		</div>
	);
}
