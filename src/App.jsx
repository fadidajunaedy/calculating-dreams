import { useState } from 'react'
import './App.css'

function App() {
  const [duration, setDuration] = useState(0)
  const [price, setPrice] = useState(0)
  const [dpPercent, setDpPercent] = useState(0)
  const [downPayment, setDownPayment] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
