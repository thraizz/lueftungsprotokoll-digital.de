// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lueftungsprotokoll-digital.de',
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: 1.0,
			lastmod: new Date(),
		}),
	],
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
});
