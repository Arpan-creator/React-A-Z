import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Counting</h2>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <p>Current Counr :{count}</p>
      <button onClick={() => setCount(count-1)}>Decrement</button>
      <br /><br />
      <button onClick={() =>setCount(0)}>Reset</button>

    </div>
  )
}

export default App
