import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import ItemContainer from './components/ItemContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar ></Navbar>
      <ItemContainer></ItemContainer>
    </div>
  )
}

export default App
