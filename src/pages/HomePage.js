import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdbapi.js";

function HomePage() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true); // 로딩 상태 추가

	useEffect(() => {
		async function getMovies() {
			try {
				const data = await fetchMovies();
				setMovies(data || []); // 데이터가 없을 경우 빈 배열로 설정
			} catch (error) {
				console.error("Error fetching movies:", error);
			} finally {
				setLoading(false); // 로딩 완료
			}
		}
		getMovies();
	}, []);
	if (loading) return <div>Loading...</div>;
	return (
		<div>
			<h1>Home Page</h1>
			<div>
			{movies.length > 0 ? ( // 데이터가 있을 때만 리스트 렌더링
				<ul>
					{movies.map((movie) => (
						<li key={movie.id}>
							<Link to={`/movie/${movie.id}`}>{movie.title}</Link>
						</li>
					))}
				</ul>
			) : (
				<p>No movies found.</p> // 데이터가 없을 경우 처리
			)}
			</div>
			
			

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
