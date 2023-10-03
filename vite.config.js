import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { purgeCSS } from 'vite-plugin-tailwind-purgecss';

export default defineConfig({
	plugins: [sveltekit(), purgeCSS()]
});
