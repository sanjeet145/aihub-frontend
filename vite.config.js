import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['aihub-oa8q.onrender.com'],
    host: '0.0.0.0',  
    port: 3000       
  },
  headers: {
    "Content-Security-Policy": "script-src 'self' https://aihub-oa8q.onrender.com"
  }
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })
