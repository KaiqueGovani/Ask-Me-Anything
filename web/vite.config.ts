import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "^/api": {
        target: `http://go-bff:8080`,
        changeOrigin: true,
      },
      "^/ws": {
        target: `ws://go-bff:8080`,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/ws/, ""),
      },
    },
  },
});
