import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@api": path.resolve(__dirname, "src/api"),
			"@store": path.resolve(__dirname, "src/store"),
		},
	},
});
