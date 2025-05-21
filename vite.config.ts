import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],
   build: {
      rollupOptions: {
         input: {
            popup: 'src/popup/Popup.html',
            background: 'src/background/background.ts',
            content: 'src/content/content.ts'
         },
         output: {
            entryFileNames: 'assets/[name].js', // JS files go to assets/
            assetFileNames: '[name].[ext]' // HTML files go to the root of dist/
         }
      }
   }
});
