import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth/context'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Test Suite for <PulicRoute />', () => {
  test('should display the children if the user is not authenticated', () => {
    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>,
    )

    expect(screen.getByText('Public Route')).toBeTruthy()
  })

  test('should navigate to another route if the user is authenticated', () => {
    const contextValue = {
      logged: true,
      user: 'Roberto',
    }

    // // We always need to provide the context in the test that way the other
    // // components work correctly
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          {/* Provide the Routes parent */}
          <Routes>
            {/* Page redireccted when the user is authenticated */}
            <Route path="/dragon-ball" element={<h1> Dragon Ball Page</h1>} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    )

    expect(screen.getByText('Dragon Ball Page')).toBeTruthy()
  })
})
