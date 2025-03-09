import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// 리뷰 데이터 추가 함수
export const addReview = async (userId, movieData, rating, reviewText) => {
	try {
		const reviewRef = collection(db, "users", userId, "reviews");
		await addDoc(reviewRef, {
			movieId: movieData.id,
			movieTitle: movieData.title,
			moviePoster: movieData.poster_path || "",
			// "YYYY-MM-DD"형식
			reviewDate: new Date().toISOString().split("T")[0],
			rating,
			reviewText,
			createdAt: serverTimestamp(),
		});
		console.log("succeessfully saved!", reviewRef);
	} catch (error) {
		console.error("error in review save:", error);
	}
};
