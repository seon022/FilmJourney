import React, { useEffect, useState } from 'react';

import { Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';

import BackHeader from '../components/BackHeader';
import { db } from '../firebase';

const FavoritesPage = ({ userId }) => {
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
          <Card key={fav.id}>
            <CardMedia component="img" height="300" image={fav.moviePoster} alt={fav.movieTitle} />
            <CardContent>
              <Typography variant="h6">{fav.movieTitle}</Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};
export default FavoritesPage;
