import { buildSync } from 'esbuild'

buildSync({
	entryPoints: ['src'],
	bundle: true,
	minify: true,
	platform: 'node',
	sourcemap: 'external',
	target: ['node16'],
	outfile: 'build/main.js',
})
