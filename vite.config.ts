import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/',
  server: {
    host: "::",
    port: 8080,
    cors: {
      origin: ['http://zanaviveli.ge', 'https://zanaviveli.ge', 'http://www.zanaviveli.ge', 'https://www.zanaviveli.ge'],
      credentials: true
    }
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
