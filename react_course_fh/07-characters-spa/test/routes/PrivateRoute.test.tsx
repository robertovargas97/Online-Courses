import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth/context'

import { PrivateRoute } from '../../src/router/PrivateRoute'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Test Suite for <PrivateRoute />', () => {
  test('should display the children if the user is authenticated', () => {
    const contextValue = {
      logged: true,
      user: ' Roberto',
    }

    Storage.prototype.setItem = jest.fn()

    render(
      <AuthContext.Provider value={contextValue}>
        {/* The  MemoryRouter needs to be used here to provide contextto the other
         routes*/}
        <MemoryRouter initialEntries={['/dragon-ball']}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>,
    )

    expect(screen.getByText('Private Route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/dragon-ball',
    )
  })

  test('should navigate to login route if the user is not authenticated', () => {
    const contextValue = {
      logged: false,
    }

    // // We always need to provide the context in the test that way the other
    // // components work correctly
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dragon-ball']}>
          <Routes>
            <Route path="login" element={<h1> Login Page</h1>} />
            <Route
              path="/dragon-ball"
              element={
                <PrivateRoute>
                  <h1>Private Route</h1>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    )

    expect(screen.getByText('Login Page')).toBeTruthy()
  })
})
