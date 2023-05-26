import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? "/vite-05/" : "/",
  // base: "/vite-05/",
  plugins: [vue()],
})
