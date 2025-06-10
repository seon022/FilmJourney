import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { getReviews, deleteReviewFromFirebase } from '../api/reviewService';

const useMovieStore = create(
  persist(
    devtools((set) => ({
      movie: null,
      reviews: [],
      editReview: null,

      setMovie: (movie) =>
        set({
          movie,
        }),
      setEditReview: (review) => set({ editReview: review }),

      fetchReviews: async () => {
        try {
          const reviews = await getReviews();
          set({ reviews });
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      },

      deleteReview: async (reviewId) => {
        try {
          await deleteReviewFromFirebase(reviewId);
          set((state) => ({
            reviews: state.reviews.filter((review) => review.id !== reviewId),
          }));
        } catch (error) {
          console.error('Error deleting review:', error);
        }
      },
    }))
  )
);
export default useMovieStore;
