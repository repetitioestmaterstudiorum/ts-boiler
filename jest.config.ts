import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	// https://jestjs.io/docs/configuration
	roots: ['<rootDir>/tests'],
	verbose: true, // report on each inidvidual file
	transform: {
		'\\.[jt]sx?$': 'ts-jest', // using ts-jest instead of default babel-jest
	},
}
export default config
