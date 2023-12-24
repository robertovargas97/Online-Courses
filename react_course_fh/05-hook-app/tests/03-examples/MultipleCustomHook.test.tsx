import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHook } from '../../src/03-examples/MultipleCustomHook'

import { useFetch } from '../../src/hooks/useFetch'
import { useCounter } from '../../src/hooks/useCounter'

// Mock the entire modules
jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

const useFetchMock = useFetch as jest.MockedFunction<typeof useFetch>
const useCounterMock = useCounter as jest.MockedFunction<typeof useCounter>

describe('Multiple Custom Hook Component', () => {
  const mockIncrement = jest.fn()
  const mockDecrement = jest.fn()
  const mockReset = jest.fn()
  const mockSetCounter = jest.fn()
  const useCounterReturnValue = {
    counter: 1,
    increment: mockIncrement,
    decrement: mockDecrement,
    reset: mockReset,
    setCounter: mockSetCounter,
  }
  useCounterMock.mockReturnValue(useCounterReturnValue)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should display the component by default', () => {
    useFetchMock.mockReturnValue({ data: null, isLoading: true, error: null })

    render(<MultipleCustomHook />)

    expect(screen.findByText('Loading Data...'))
    expect(screen.findByText('Pokemon'))
  })

  test('should display a pokemon gif', () => {
    const returnValue = {
      data: {
        name: 'Pokemon Test',
        sprites: { front_default: 'front', front_shiny: 'shiny' },
      },
      isLoading: false,
      error: null,
    }
    useFetchMock.mockReturnValue(returnValue)

    render(<MultipleCustomHook />)

    const gif: HTMLImageElement = screen.getByRole('img')
    expect(gif)

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(4)

    const pokemonNameHeading = screen.getByRole('heading', { level: 3 })
    expect(pokemonNameHeading.innerHTML).toContain(returnValue.data.name)
  })

  test('should call the increment function when clicking the Next button', () => {
    const returnValue = {
      data: {
        name: 'Pokemon Test',
        sprites: { front_default: 'front', front_shiny: 'shiny' },
      },
      isLoading: false,
      error: null,
    }

    useFetchMock.mockReturnValue(returnValue)
    render(<MultipleCustomHook />)
    const nextButton = screen.getByRole('button', { name: 'nextButton' })
    // Este si funciona y me pasa el expect
    fireEvent.click(nextButton)
    // Este no funciona
    // userEvent.click(nextButton)
    expect(mockIncrement).toHaveBeenCalled()
  })
})
