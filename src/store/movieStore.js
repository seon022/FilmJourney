import { create } from "zustand";
import { deleteReviewFromFirebase } from "../api/reviewService";

const USER_ID = "7M03tdkoD19ICcaH0Jwv";

export const useMovieStore = create((set) => ({
	movies: null,
	reviews: [],
	setMovies: (movies) =>
		set({
			movies,
		}),
	setReviews: (review) =>
		set((state) => ({ reviews: [...state.reviews, review] })),
	deleteReview: async (reviewId) => {
		try {
			await deleteReviewFromFirebase(USER_ID, reviewId); // 상수 userId 사용
			set((state) => ({
				reviews: state.reviews.filter((review) => review.id !== reviewId),
			}));
		} catch (error) {
			console.error("Error deleting review:", error);
		}
	},
}));
export default useMovieStore;
