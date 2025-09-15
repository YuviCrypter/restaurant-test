// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === "build" ? "/restaurant-test/" : "/";

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: "dist",
    },
  };
});
