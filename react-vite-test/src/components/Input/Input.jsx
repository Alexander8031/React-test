import { useState, useRef } from 'react'

import "./input.css";

export default function StateInputRef() {
  const input = useRef()
  const [show, setShow] = useState(false)

  function handleClick() {
      setShow(input.current.value)
    }

  return (
    <main>
    <div className="container">
      <input ref={input} type="text"/>
      <button onClick={handleClick}>Готово</button>
      <h3>{show}</h3>
    </div>
    </main>
  )
}
