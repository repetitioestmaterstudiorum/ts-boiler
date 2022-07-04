import { C } from '/src/config'

// ---

function printConfig(): void {
	console.log('config:', JSON.stringify(C, null, 2))
}

printConfig()
