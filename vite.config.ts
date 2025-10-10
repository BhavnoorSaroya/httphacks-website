import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext", // Modern syntax for smaller output
    minify: "esbuild", // Fastest minifier (default)
    cssMinify: true,
    sourcemap: false, // Turn off if you don’t need debugging
    assetsInlineLimit: 4096, // Inline assets < 4kb
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: undefined, // Avoid unnecessary splitting
      },
    },
  },
})
