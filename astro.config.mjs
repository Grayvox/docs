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
					collapsed: true
				},
				{
					label: 'Supernovel',
					autogenerate: { directory: 'supernovel' },
					collapsed: true
				},
				{
					label: 'Obsidian Plugins',
					items: [
						'readme',
						{
							label: 'Character Sheets',
							autogenerate: { directory: 'obsidian-plugins/character-sheets' },
							collapsed: true
						}
					],
					collapsed: true
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
