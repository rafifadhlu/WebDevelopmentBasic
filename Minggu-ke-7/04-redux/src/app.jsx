import { useState } from 'preact/hooks'
import './app.css'
import TodoList from './components/TodoList'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <TodoList/>
    </>
  )
}
