import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MyPage from "./pages/MyPage";
import ReviewForm from "./pages/ReviewForm";

function App() {
	return (
		<Router>
			<Container>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movie/:id" element={<MovieDetailPage />} />
					<Route path="/movie/:id/review" element={<ReviewForm />} />
					<Route path="/search" element={<MyPage />} />
					<Route path="/favorites" element={<MyPage />} />
					<Route path="/mypage" element={<MyPage />} />
				</Routes>
				<Navigation />
			</Container>
		</Router>
	);
}

export default App;
