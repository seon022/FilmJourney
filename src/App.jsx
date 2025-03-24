import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "@components/Navigation";
import Home from "@pages/Home";
import MovieDetail from "@pages/MovieDetail";
import MyPage from "@pages/MyPage";
import ReviewForm from "@pages/ReviewForm";
import ReviewPage from "@pages/ReviewPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie/:id" element={<MovieDetail />} />
				<Route path="/review/:id" element={<ReviewForm />} />
				<Route path="/search" element={<MyPage />} />
				<Route path="/favorites" element={<MyPage />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/review" element={<ReviewPage />} />
			</Routes>
			<Navigation />
		</Router>
	);
}

export default App;
