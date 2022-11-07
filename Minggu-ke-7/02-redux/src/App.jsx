import { useState } from 'react'
import Counter from './components/Counter';
import TodoList from './components/TodoList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter />
      <TodoList />
    </div>
  )
}

export default App
