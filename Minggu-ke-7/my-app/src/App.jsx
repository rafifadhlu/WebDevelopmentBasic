import { useState } from 'react'
import './App.css'
import StudentInfo from './component/StudentInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StudentInfo nama={"rapi"} age={22}/>
      
    </div>
  )
}

export default App
