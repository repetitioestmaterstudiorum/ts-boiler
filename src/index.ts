import { C } from './constants'

// ---

function printConstants(): void {
	console.log('constants:', JSON.stringify(C, null, 2))
}

printConstants()
