import { useEffect, useState } from 'react'

export const Message = () => {
  const [coords, setCords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const { x, y } = event
      setCords({ x, y })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <h3> The user already exists </h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  )
}
