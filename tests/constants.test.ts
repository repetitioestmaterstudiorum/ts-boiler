import { describe, expect, it } from 'vitest'
import { C } from '/src/constants'

describe('test template', () => {
	it('C contains app port', () => {
		expect(C.app.port).toBeDefined()
	})
})
