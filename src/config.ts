import type { Config } from '/types/t.config'

// ---

export const C: Readonly<Config> = {
	app: {
		port: process.env.PORT || '8080',
		environment: process.env.NODE_ENV || 'development',
	},
}
