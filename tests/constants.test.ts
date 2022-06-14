import { C } from '/src/constants'

describe('test template', () => {
	test('C contains port', () => {
		expect(C.app?.port).toBeDefined()
	})
})
