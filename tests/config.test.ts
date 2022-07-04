import { describe, expect, it } from 'vitest'
import { C } from '/src/config'

describe('config tests', () => {
	it('C.app.port is defined', () => {
		expect(C.app.port).toBeDefined()
	})
})
