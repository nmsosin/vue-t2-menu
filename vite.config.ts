import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [vue()],
  server: {
    port: 3000, // To run the app on port 3000
    open: true, // If we want to open the app once its started
  },
  
})
