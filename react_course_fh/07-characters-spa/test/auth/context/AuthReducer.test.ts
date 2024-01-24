import { AuthReducerActionType, authReducer } from '../../../src/auth/context'
import { types } from '../../../src/auth/types/types'

describe('Test for Auth Reducer', () => {
  test('should return the default state', () => {
    const authReducerAction = {} as AuthReducerActionType
    const state = authReducer({ logged: false }, authReducerAction)
    expect(state).toEqual({ logged: false })
  })

  test('should call the login and establish the user ', () => {
    const authReducerAction: AuthReducerActionType = {
      type: types.login,
      payload: 'Roberto',
    }

    const state = authReducer({ logged: false }, authReducerAction)
    expect(state).toEqual({ logged: true, user: 'Roberto' })
  })

  test('should logout and delete the name of the user', () => {
    const authReducerAction: AuthReducerActionType = {
      type: types.logout,
    }

    const state = authReducer(
      { logged: true, user: 'Roberto' },
      authReducerAction,
    )
    expect(state).toEqual({ logged: false, user: '' })
  })
})
