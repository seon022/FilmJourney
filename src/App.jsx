import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MyPage from "./pages/MyPage";
import ReviewForm from "./pages/ReviewForm";
import StyleGuidePage from "./pages/StyleGuidePage";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/movie/:id"
							element={<MovieDetailPage />}
						/>
						<Route
							path="/movie/:id/review"
							element={<ReviewForm />}
						/>
						<Route path="/mypage" element={<MyPage />} />
						<Route
							path="/style-guide"
							element={<StyleGuidePage />}
						/>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
