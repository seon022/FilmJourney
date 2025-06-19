import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ReviewPage from '@pages/ReviewPage';

import Navigation from './components/Navigation';
import Auth from './pages/Auth';
import EditProfile from './pages/EditProfile';
import FavoritesPage from './pages/FavoritesPage';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Mypage from './pages/Mypage/MyPage';
import ReviewForm from './pages/ReviewForm';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/review/:id" element={<ReviewForm />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
