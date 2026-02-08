import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages serves from /<repo>/
  base: mode === "production" ? "/hanimir.com/" : "/",
}));
