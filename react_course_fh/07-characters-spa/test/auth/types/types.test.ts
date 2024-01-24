import { types } from '../../../src/auth/types/types'

describe('Test Suit for types', () => {
  test('should return : [Auth] Login - [Auth] Logout', () => {
    expect(types.login).toBe('[Auth] Login')
    expect(types.logout).toBe('[Auth] Logout')
  })
})
