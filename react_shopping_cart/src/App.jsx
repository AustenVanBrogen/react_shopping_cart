import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import ItemContainer from './components/ItemContainer';

function App() {
  const [count, setCount] = useState(0)
  const [activeBtn, setActiveBtn] = useState('Jackets'); //Might be able to use a hook instead of passing activeBtn to the props

  function buttonClicked(btn){
      setActiveBtn(btn);
  }

  return (
    <div className="App">
      <Navbar clickedBtn={buttonClicked} activeBtn={activeBtn}></Navbar>
      <ItemContainer></ItemContainer>
    </div>
  )
}

export default App
