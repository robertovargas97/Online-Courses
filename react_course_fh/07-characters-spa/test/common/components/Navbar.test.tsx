import { MemoryRouter, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../src/auth/context'
import { render, screen, waitFor } from '@testing-library/react'
import { Navbar } from '../../../src/common'
import { userEvent } from '@testing-library/user-event'

// Mock the 'react-router-dom' module
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Use the actual module except for useNavigate
  useNavigate: jest.fn(),
}))

describe('<NavBar Component/> Test Suite', () => {
  const context = {
    logged: true,
    user: 'Roberto',
    logout: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should display the user name', () => {
    render(
      <MemoryRouter initialEntries={['/dragon-ball']}>
        <AuthContext.Provider value={context}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    )

    expect(screen.getByText('Roberto')).toBeTruthy()
  })

  test('should execute the logout', async () => {
    // Mock useNavigate
    const mockNavigate = jest.fn()
    ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)

    render(
      <MemoryRouter initialEntries={['/dragon-ball']}>
        <AuthContext.Provider value={context}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    )

    const logoutButton = screen.getByText('Logout')

    userEvent.click(logoutButton)
    // # When using userEvent.<event> we should wait for the method to be called
    await waitFor(() => {
      expect(context.logout).toHaveBeenCalled()
      expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true })
    })
  })
})
