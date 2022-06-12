import type { Constants } from '/types/t.constants'

// ---

export const C: Readonly<Constants> = {
	app: {
		port: process.env.PORT || '8080',
		environment: process.env.NODE_ENV || 'development',
	},
}
