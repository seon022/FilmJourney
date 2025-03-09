import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MyPage from "./pages/MyPage";
import ReviewForm from "./pages/ReviewForm";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movie/:id" element={<MovieDetailPage />} />
				<Route path="/movie/:id/review" element={<ReviewForm />} />
				<Route path="/mypage" element={<MyPage />} />
			</Routes>
		</Router>
	);
}

export default App;
