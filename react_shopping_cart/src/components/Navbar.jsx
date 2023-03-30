import './Navbar.css';
import Button from './Button.jsx';
import React, {useState} from 'react';

export default function Navbar(){
    const [activeBtn, setActiveBtn] = useState('Jackets');

    function buttonClicked(btn){
        //setActiveBtn(btn);
        console.log(`${btn} was clicked`);
    }

    return <div className='navBar'>
        <Button button='navbarButton Jackets' clickedBtn={buttonClicked}></Button>
        <Button button='navbarButton Tops' clickedBtn={buttonClicked}></Button>
        <Button button='navbarButton Boots' clickedBtn={buttonClicked}></Button>
        <Button button='navbarButton Pants' clickedBtn={buttonClicked}></Button>
        </div>
}