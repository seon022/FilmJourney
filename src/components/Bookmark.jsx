import React, { useState, useEffect } from 'react';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { red } from '@mui/material/colors';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

import { db } from '../firebase';

const Bookmark = ({ userId, movie }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (!userId || !movie || !movie.id) return;

    async function checkFavorite() {
      const favRef = doc(db, 'users', userId, 'favorites', movie.id.toString());
      const favSnap = await getDoc(favRef);
      setBookmarked(favSnap.exists());
    }

    checkFavorite();
  }, [userId, movie?.id]);

  const handleToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!userId || !movie || !movie.id) {
      console.error('Invalid userId or movie.id', { userId, movie });
      return;
    }
    const favRef = doc(db, 'users', userId, 'favorites', movie.id.toString());

    if (bookmarked) {
      await deleteDoc(favRef);
      setBookmarked(false);
    } else {
      await setDoc(favRef, {
        movieTitle: movie.title,
        moviePoster: movie.poster,
        createdAt: new Date(),
      });
      setBookmarked(true);
    }
  };

  if (!movie || !movie.id) {
    return null;
  }

  return (
    <div className="favorite-icons" onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {bookmarked ? (
        <FavoriteOutlinedIcon sx={{ color: red[400] }} />
      ) : (
        <FavoriteBorderOutlinedIcon sx={{ color: red[200] }} />
      )}
    </div>
  );
};

export default Bookmark;
