import path from "path";
import { fileURLToPath } from "url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
