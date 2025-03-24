import { create } from "zustand";
import { getReviews, deleteReviewFromFirebase } from "../api/reviewService";

const USER_ID = "7M03tdkoD19ICcaH0Jwv";

export const useMovieStore = create((set) => ({
	movies: null,
	reviews: [],
	setMovies: (movies) =>
		set({
			movies,
		}),

	setReviews: (reviews) => set({ reviews }),
	fetchReviews: async () => {
		try {
			const reviews = await getReviews(USER_ID);
			set({ reviews });
		} catch (error) {}
	},

	deleteReview: async (reviewId) => {
		try {
			await deleteReviewFromFirebase(USER_ID, reviewId);
			set((state) => ({
				reviews: state.reviews.filter((review) => review.id !== reviewId),
			}));
		} catch (error) {
			console.error("Error deleting review:", error);
		}
	},
}));
export default useMovieStore;
