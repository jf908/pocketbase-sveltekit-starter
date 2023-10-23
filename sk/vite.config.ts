import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';

const pocketbase_url = 'http://localhost:8090';

export default defineConfig({
  plugins: [Unocss(), sveltekit()],
  server: {
    proxy: {
      '/api': pocketbase_url,
    },
  },
});
