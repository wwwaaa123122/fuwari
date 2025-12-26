// vite.config.js

import astro from "@astrojs/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		allowedHosts: "all",

		host: "0.0.0.0",
	},
	plugins: [astro()],
});
