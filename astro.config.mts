import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://instantevivo.netlify.app/', // Opcional, puedes dejarlo vacío
	vite: {
		plugins: [tailwindcss()],
	},
});
