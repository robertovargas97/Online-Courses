import { render, screen, waitFor } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'
import userEvent from '@testing-library/user-event'

describe('Loiin Page Test Suit', () => {
  const user = { id: 1, name: 'Roberto' }

  test('should render the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>,
    )

    const preTag = screen.getByTestId('pre-tag')
    expect(preTag.innerHTML.trim()).toBe('null')
  })

  test('should render the component with the user', () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <LoginPage />
      </UserContext.Provider>,
    )

    const userSmall = screen.getByTestId('pre-tag')
    expect(userSmall.innerHTML.trim()).toContain('Roberto')
  })

  test('should call the setUser from the context', async () => {
    const setUserMock = jest.fn()

    render(
      <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>,
    )

    const button = screen.getByRole('button')
    userEvent.click(button)

    await waitFor(() => {
      expect(setUserMock).toHaveBeenCalled()
      expect(setUserMock).toHaveBeenCalledWith({
        id: 123,
        name: 'Roberto',
        email: 'robert.vargs@mail.com',
      })
    })
  })
})
