import { db } from "../firebase";
import {
	collection,
	addDoc,
	serverTimestamp,
	getDocs,
} from "firebase/firestore";
export const addReview = async (
	userId,
	movieData,
	rating,
	reviewText,
	watchedDate
) => {
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
		console.log("Successfully saved!");
	} catch (error) {
		console.error("Error in review save:", error);
	}
};
export const getReviews = async (userId) => {
	try {
		const reviewRef = collection(db, "users", userId, "reviews");
		const snapshot = await getDocs(reviewRef);
		const reviews = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return reviews;
	} catch (error) {
		console.error("error in getting reviews", error);
		return [];
	}
};
