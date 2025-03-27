import { onAuthStateChanged, signOut } from "firebase/auth";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { auth } from "../firebase";

const useUserStore = create(
	persist(
		devtools((set) => ({
			user: { userId: "7M03tdkoD19ICcaH0Jwv", email: "" },

			login: (userData) => set({ user: userData }),

			logout: async () => {
				try {
					await signOut(auth); // ✅ Firebase 로그아웃
					set({ user: null }); // ✅ Zustand 상태 초기화
				} catch (error) {
					console.error("Logout Error:", error);
				}
			},

			setUser: (user) => set({ user }), // Firebase 상태 변경 반영
		})),
		{ name: "auth-storage" } // 로컬스토리지 저장 key
	)
);

// Firebase 인증 상태 유지 (새로고침해도 로그인 정보 유지)
onAuthStateChanged(auth, (currentUser) => {
	if (currentUser) {
		useUserStore.getState().setUser({
			userId: currentUser.uid,
			email: currentUser.email,
			displayName: currentUser.displayName,
		});
	} else {
		useUserStore.getState().setUser(null);
	}
});

export default useUserStore;
