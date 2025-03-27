import {
	collection,
	addDoc,
	serverTimestamp,
	getDocs,
	doc,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";

import useUserStore from "@store/userStore";

import { db } from "../firebase";

const { user } = useUserStore.getState();
const userId = user ? user.userId : null;

export const addReview = async (movieData, rating, reviewText, watchedDate) => {
	if (!userId) throw new Error("User is not logged in.");

	try {
		const reviewRef = collection(db, "users", userId, "reviews");
		await addDoc(reviewRef, {
			movieId: movieData.id,
			movieTitle: movieData.title,
			moviePoster: movieData.poster_path || "",
			reviewDate: new Date().toISOString().split("T")[0],
			watchedDate: watchedDate || null,
			rating,
			reviewText,
			createdAt: serverTimestamp(),
		});
		console.log(
			"Successfully saved!",
			movieData,
			rating,
			reviewText,
			watchedDate
		);
	} catch (error) {
		console.error("Error in review save:", error);
	}
};

export const updateReview = async (
	reviewId,
	movieData,
	rating,
	reviewText,
	watchedDate
) => {
	if (!userId) throw new Error("User is not logged in.");

	try {
		const reviewDocRef = doc(db, "users", userId, "reviews", reviewId);
		await updateDoc(reviewDocRef, {
			movieId: movieData.id,
			movieTitle: movieData.title,
			moviePoster: movieData.poster_path || "",
			watchedDate: watchedDate || null,
			rating,
			reviewText,
			updatedAt: serverTimestamp(),
		});
		console.log("Review updated successfully!");
	} catch (error) {
		console.error("Error updating review:", error);
	}
};

export const getReviews = async () => {
	try {
		const reviewRef = collection(db, "users", userId, "reviews");
		const snapshot = await getDocs(reviewRef);
		const reviews = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return reviews;
	} catch (error) {
		console.error("Error fetching reviews:", error);
		return [];
	}
};

export const deleteReviewFromFirebase = async (reviewId) => {
	try {
		const reviewDoc = doc(db, "users", userId, "reviews", reviewId);
		await deleteDoc(reviewDoc);
		console.log("Review deleted successfully");
	} catch (error) {
		console.error("Error deleting review:", error);
	}
};
