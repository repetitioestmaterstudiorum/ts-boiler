import { Constants } from '/types/t.constants.js'

// ---

export const C: Partial<Constants> = {}

C.app = {
	port: process.env.PORT || '8080',
	environment: process.env.NODE_ENV || 'development',
}
