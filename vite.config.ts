import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths()
  ],
  server: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      protocol: 'wss',  // Required for Azure Web Apps
      clientPort: 443   // Required for Azure Web Apps
    }
  },
  preview: {
    port: 7070,  // Must match NGINX config
    host: '0.0.0.0',
    strictPort: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,  // Disable in production
    minify: 'terser',  // Enhanced minification
    terserOptions: {
      compress: {
        drop_console: true  // Remove console logs in production
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {  // Better code splitting
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          vendor: ['lodash', 'axios']
        }
      }
    }
  }
});