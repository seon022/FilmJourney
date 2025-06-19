import React, { useEffect, useState } from 'react';

import { Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';

import BackHeader from '../components/BackHeader';
import MovieCard from '../components/MovieCard';
import { db } from '../firebase';
import useUserStore from '../store/userStore';

const FavoritesPage = ({ userId }) => {
  const { user } = useUserStore.getState();
  // const userId = user ? user.userId : null;
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!userId) return;

    async function fetchFavorites() {
      const favCol = collection(db, 'users', userId, 'favorites');
      const favSnap = await getDocs(favCol);
      const favList = favSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFavorites(favList);
      console.log('userId:', userId);
      console.log('favorites loaded:', favList);
    }

    fetchFavorites();
  }, [userId]);
  return (
    <div>
      <BackHeader text="My Favorite" />
      <Container>
        {favorites.map((fav) => (
          <MovieCard
            key={fav.id}
            id={fav.id}
            poster={fav.moviePoster}
            title={fav.movieTitle}
            userId={user ? user.uid : null}
          />
        ))}
      </Container>
    </div>
  );
};
export default FavoritesPage;
