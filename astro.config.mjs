// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Graydocs',
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/Grayvox/docs' 
				},
				{ 
					icon: 'document', 
					label: 'Main Website', 
					href: 'https://grayvox.com' 
				},
			],
			sidebar: [
				{ 
					label: 'README', 
					link: '/readme' 
				},
				{
					label: 'Journalore',
					autogenerate: { directory: 'journalore' },
				},
				{
					label: 'Supernovel',
					autogenerate: { directory: 'supernovel' },
				},
				{
					label: 'Obsidian Plugins',
					autogenerate: { directory: 'obsidian-plugins' },
				},
			],
			plugins: [
        		catppuccin({
					dark: { flavor: "mocha", accent: "blue" },
					light: { flavor: "latte", accent: "lavender" }
				})
      		]
		}),
	],
});
