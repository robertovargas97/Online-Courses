import { render, screen } from '@testing-library/react'
import { MainApp } from '../../src/09-useContext/MainApp'
import { MemoryRouter } from 'react-router-dom'

describe('Main App Test Suir', () => {
  test('should render the Home Page', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>,
    )

    expect(screen.getByText('Home Page')).toBeTruthy()
  })

  test('should render the Home Page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>,
    )

    expect(screen.getByText('Login Page')).toBeTruthy()
  })
})
