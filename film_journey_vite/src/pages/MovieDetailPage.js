import { useParams, useNavigate } from "react-router-dom";

function MovieDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

	const handleGoToReviewForm = () => {
		// ReviewForm 페이지로 이동 (영화 ID를 URL 파라미터로 넘길 수 있음음)
		navigate(`/movie/${id}/review`);
	};

	return (
		<div>
			<h1>Movie Detail Page</h1>
			<p>Movie ID: {id}</p>

			<button onClick={handleGoToReviewForm}>Go to Review Form</button>
		</div>
	);
}

export default MovieDetailPage;
