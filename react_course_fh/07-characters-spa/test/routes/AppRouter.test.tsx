import { render, screen } from '@testing-library/react'
import { AppRouter } from '../../src/router/AppRouter'
import { AuthContext } from '../../src/auth/context'
import { MemoryRouter } from 'react-router-dom'

describe('<AppRouter/> Test Suit', () => {
  test('should display the login if the user is not authenticated', () => {
    const context = {
      logged: false,
    }

    render(
      <MemoryRouter initialEntries={['/dragon-ball']}>
        <AuthContext.Provider value={context}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>,
    )

    expect(screen.getByTestId('login')).toBeTruthy()
    expect(screen.getAllByText('Login').length).toBe(2)
  })

  test('should display the Marvel page if the user is authenticated', () => {
    const context = {
      logged: true,
      user: 'Roberto',
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={context}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>,
    )

    expect(screen.getByTestId('DragonBallTitle')).toBeTruthy()
  })
})
