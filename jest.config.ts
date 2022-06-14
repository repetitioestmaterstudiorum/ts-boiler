import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	// https://jestjs.io/docs/configuration
	roots: ['<rootDir>/tests'],
	verbose: true, // report on each inidvidual file
	// use ts-jest instead of default babel-jest
	transform: {
		'\\.[jt]sx?$': 'ts-jest',
	},
	// mirror the paths setting in tsconfig.json
	moduleNameMapper: {
		'/src/(.*)': '<rootDir>/src/$1',
	},
}
export default config
