import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  collectionGroup,
  where,
} from 'firebase/firestore';

import { db } from '../firebase';
import useUserStore from '../store/userStore';

export const addReview = async (movieData, rating, reviewText, watchedDate) => {
  const { user } = useUserStore.getState();
  const userId = user ? user.userId : null;
  if (!userId) throw new Error('User is not logged in.');

  try {
    const reviewRef = collection(db, 'users', userId, 'reviews');
    await addDoc(reviewRef, {
      userName: user.displayName,
      movieId: movieData.id,
      movieTitle: movieData.title,
      posterPath: movieData.posterPath || '',
      reviewDate: new Date().toISOString().split('T')[0],
      watchedDate: watchedDate || null,
      rating,
      reviewText,
      createdAt: serverTimestamp(),
    });
    console.log('Successfully saved!');
  } catch (error) {
    console.error('Error in review save:', error);
  }
};

export const updateReview = async (reviewId, movieData, rating, reviewText, watchedDate) => {
  const { user } = useUserStore.getState();
  const userId = user ? user.userId : null;
  if (!userId) throw new Error('User is not logged in.');

  try {
    const reviewDocRef = doc(db, 'users', userId, 'reviews', reviewId);
    await updateDoc(reviewDocRef, {
      userName: user.displayName,
      movieId: movieData.id,
      movieTitle: movieData.title,
      posterPath: movieData.posterPath || '',
      watchedDate: watchedDate || null,
      rating,
      reviewText,
      updatedAt: serverTimestamp(),
    });
    console.log('Review updated successfully!');
  } catch (error) {
    console.error('Error updating review:', error);
  }
};

export const getReviews = async () => {
  const { user } = useUserStore.getState();
  const userId = user ? user.userId : null;
  if (!userId) throw new Error('User is not logged in.');

  try {
    const reviewRef = collection(db, 'users', userId, 'reviews');
    const snapshot = await getDocs(reviewRef);
    const reviews = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};
export const getReviewsCount = async () => {
  const { user } = useUserStore.getState();
  const userId = user ? user.userId : null;
  if (!userId) {
    throw new Error('fail to get User');
  }

  try {
    const reviews = await getReviews();
    return reviews.length;
  } catch (error) {
    console.error('Error fetching reviews count:', error);
  }
};

export const deleteReviewFromFirebase = async (reviewId) => {
  const { user } = useUserStore.getState();
  const userId = user ? user.userId : null;
  if (!reviewId) throw new Error('Invalid reviewId');

  try {
    const reviewDoc = doc(db, 'users', userId, 'reviews', reviewId);
    await deleteDoc(reviewDoc);
    console.log('Review deleted successfully');
  } catch (error) {
    console.error('Error deleting review:', error);
  }
};

export const getAllReviewsForMovie = async (movieId) => {
  if (!movieId) throw new Error('Invalid movieId');

  try {
    const reviewsQuery = query(
      collectionGroup(db, 'reviews'),
      where('movieId', '==', Number(movieId))
    );

    const querySnapshot = await getDocs(reviewsQuery);
    const reviews = [];

    querySnapshot.forEach((doc) => {
      reviews.push({ id: doc.id, ...doc.data() });
    });

    return reviews;
  } catch (error) {
    console.error('Error fetching all reviews for movie:', error);
    return [];
  }
};
