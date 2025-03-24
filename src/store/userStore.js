import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useUserStore = create(
	persist(
		devtools((set) => ({
			user: { userId: "7M03tdkoD19ICcaH0Jwv", email: "" },

			login: (userData) => set({ user: userData }),

			logout: () => set({ user: null }),
		}))
	)
);
