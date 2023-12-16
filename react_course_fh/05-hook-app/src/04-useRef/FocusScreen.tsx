import { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    console.log(inputRef)
    inputRef.current?.select()
  }

  const component = (
    <>
      <h1> Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="form-control"
      />

      <button
        id="focusBtn"
        className="btn btn-primary mt-2"
        onClick={focusInput}
      >
        Set Focus
      </button>
    </>
  )
  return component
}
