import {useState } from 'preact/hooks'
import './app.css'
import ListDigimon from './component/ListDigimon'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListDigimon/>
    </>
  )
}
