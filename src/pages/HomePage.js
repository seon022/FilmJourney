import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<h1>Home Page</h1>
			<h2>Movie List</h2>

			<nav>
				<ul>
					<li>
						<Link to="/movie/1">Go to Movie 1</Link>
					</li>
					<li>
						<Link to="/mypage">Go to My Page</Link>
					</li>
					<li>
						<Link to="/style-guide">StyleGuidePage</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default HomePage;
