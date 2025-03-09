import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addReview = async (userId, movieData, rating, reviewText) => {
	try {
		const reviewRef = collection(db, "users", userId, "reviews");
		await addDoc(reviewRef, {
			movieId: movieData.id,
			movieTitle: movieData.title,
			moviePoster: movieData.poster_path || "",
			reviewDate: new Date().toISOString().split("T")[0],
			rating,
			reviewText,
			createdAt: serverTimestamp(),
		});
		console.log("succeessfully saved!");
	} catch (error) {
		console.error("error in review save:", error);
	}
};
