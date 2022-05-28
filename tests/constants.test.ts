import { C } from '/src/constants'

test('C contains port', () => {
	expect(C.app?.port).toBeDefined()
})
