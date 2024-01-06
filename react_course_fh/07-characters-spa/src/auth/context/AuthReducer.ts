import { types } from '../types/types'

export type AuthReducerActionType = {
  type: string
  payload?: string
}

export const authReducer = (state = {}, action: AuthReducerActionType) => {
  const returnLoginState = (logged: boolean, name: string) => {
    return {
      ...state,
      logged: logged,
      user: name,
    }
  }

  switch (action.type) {
    case types.login:
      state = returnLoginState(true, action.payload ?? '')
      break

    case types.logout:
      state = returnLoginState(false, '')
      break

    default:
      break
  }

  return state
}
