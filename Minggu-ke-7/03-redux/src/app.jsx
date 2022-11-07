import { useState } from 'preact/hooks'
import './app.css'

import Todolist from './components/TodoList'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todolist/>
    </>
  )
}
