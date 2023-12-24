import { render, screen } from '@testing-library/react'
import { HomePage } from '../../src/09-useContext/HomePage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('Home Page Test Suit', () => {
  const user = { id: 1, name: 'Roberto' }
  test('should render the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>,
    )

    const userSmall = screen.getByTestId('user-context')
    expect(userSmall.innerHTML.trim()).toBe('')
  })

  test('should render the component with the user', () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>,
    )

    const userSmall = screen.getByTestId('user-context')
    expect(userSmall.innerHTML.trim()).toBe('Roberto')
  })
})
