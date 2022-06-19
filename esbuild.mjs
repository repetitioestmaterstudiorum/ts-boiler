import { buildSync } from 'esbuild'

buildSync({
	entryPoints: ['src'],
	bundle: true,
	minify: true,
	platform: 'node',
	target: ['node16'],
	external: ['./node_modules/*'],
	outfile: 'build/main.js',
})
