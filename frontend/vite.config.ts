import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          solana: ['@solana/web3.js', '@solana/wallet-adapter-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: false,
  },
  preview: {
    port: 4173,
    host: true,
  },
  // IPFS compatibility settings
  base: './',
  publicDir: 'public',
})
