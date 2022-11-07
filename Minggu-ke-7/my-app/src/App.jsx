import { useState } from 'react'
import './App.css'
import StudentInfo from './component/StudentInfo'
import {Routes,Route,Link} from 'react-router-dom';
import Home from "./component/Home"
import About from "./component/About"
import Rincian from './component/rincian';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav >
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About/:id' element={<About/>}>
          <Route path='Rincian' element={<Rincian/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
