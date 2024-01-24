import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { Search } from '../../../src/characters/pages'
import userEvent from '@testing-library/user-event'

// Mock the 'react-router-dom' module
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Use the actual module except for useNavigate
  useNavigate: jest.fn(),
}))

describe('Serch Pages Test Suit', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should display correctly with the default values', () => {
    const { container } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    )

    expect(container).toMatchSnapshot()
  })

  test('should display Goku and the value for the queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=Goku']}>
        <Search />
      </MemoryRouter>,
    )

    const input: HTMLInputElement = screen.getByRole('textbox')
    const gokuImages: HTMLImageElement[] = screen.getAllByRole('img')
    const searchAlertDisplay = screen.getByTestId('search-alert').style.display

    expect(input.value).toBe('Goku')
    expect(gokuImages[0].src).toContain('/assets/db-goku.jpg')
    expect(searchAlertDisplay).toBe('none')
  })

  test('should display an error if no character', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=Goku12344']}>
        <Search />
      </MemoryRouter>,
    )
    const errorAlertDisplay = screen.getByTestId('error-alert').style.display
    expect(errorAlertDisplay).not.toBe('none')
  })

  test('should call the navigate to the new screen', async () => {
    // Mock useNavigate
    const mockNavigate = jest.fn()
    ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)

    render(
      <MemoryRouter initialEntries={['/search']}>
        <Search />
      </MemoryRouter>,
    )

    const input: HTMLInputElement = screen.getByRole('textbox')
    userEvent.type(input, 'Gohan')

    await waitFor(() => {
      expect(input.value).toBe('Gohan')
    })

    const form = screen.getByTestId('search-form')

    fireEvent.submit(form)
    expect(mockNavigate).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('?query=Gohan')
  })
})
