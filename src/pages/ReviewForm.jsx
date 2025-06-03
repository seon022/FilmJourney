import { useEffect, useState } from 'react';

import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import { addReview, updateReview } from '@api/reviewService';
import BackHeader from '@components/BackHeader';
import DateInput from '@components/review/DateInput';
import RatingInput from '@components/review/RatingInput';
import ReviewInput from '@components/review/ReviewInput';
import { useMovieStore } from '@store/movieStore';
import useUserStore from '@store/userStore';

function ReviewForm() {
  const navigate = useNavigate();
  const { editReview, setEditReview, movie } = useMovieStore();
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [watchedDate, setWatchedDate] = useState(dayjs());
  const [error, setError] = useState('');
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    if (editReview) {
      setReviewText(editReview.reviewText || '');
      setRating(editReview.rating);
      setWatchedDate(dayjs(editReview.watchedDate));
    } else if (movie) {
      setReviewText('');
      setRating(5);
      setWatchedDate(dayjs());
    }
  }, [editReview]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = useUserStore.getState();
    console.log(user);
    const userId = user?.userId;
    if (!userId) {
      setError('User not logged in!');
      return;
    }

    if (rating === null || !watchedDate) {
      setDateError(!watchedDate);
      return;
    }

    const movieData = editReview
      ? {
          id: editReview.movieId,
          title: editReview.movieTitle,
          posterPath: editReview.posterPath,
        }
      : {
          id: movie.id,
          title: movie.title,
          posterPath: movie.poster_path,
        };
    try {
      if (editReview) {
        await updateReview(
          editReview.id,
          movieData,
          rating,
          reviewText,
          watchedDate.format('YYYY-MM-DD')
        );
        navigate('/review');
        setError('Review updated successfully!');
      } else {
        await addReview(movieData, rating, reviewText, watchedDate.format('YYYY-MM-DD'));
        navigate('/review');
        setError('Review saved successfully!');
      }

      setEditReview(null);
    } catch (error) {
      console.error('Failed to save review:', error);
      setError('Failed to save review. Please try again.');
    }
  };

  return (
    <div>
      <BackHeader text="My Review" />
      <Container>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <Typography variant="h5" gutterBottom>
            {editReview ? `Edit Review for ${editReview.movieTitle}` : `${movie.title}`}
          </Typography>
          <RatingInput rating={rating} setRating={setRating} />
          <DateInput
            watchedDate={watchedDate}
            setWatchedDate={setWatchedDate}
            dateError={dateError}
            setDateError={setDateError}
          />
          <ReviewInput reviewText={reviewText} setReviewText={setReviewText} />

          <Button type="submit" variant="contained" color="primary">
            {editReview ? 'Update Review' : 'Save Review'}
          </Button>
        </form>

        <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={() => setError('')}>
          <Alert
            onClose={() => setError('')}
            severity={error.includes('Failed') ? 'error' : 'success'}
          >
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}

export default ReviewForm;
