import './Navbar.css';
import Button from './Button.jsx';
import React, {useState} from 'react';

export default function Navbar({clickedBtn, activeBtn}){

    return <div className='navBar'>
        <Button button='navbarButton Jackets' clickedBtn={clickedBtn} activeBtn={activeBtn}></Button>
        <Button button='navbarButton Tops' clickedBtn={clickedBtn} activeBtn={activeBtn}></Button>
        <Button button='navbarButton Boots' clickedBtn={clickedBtn} activeBtn={activeBtn}></Button>
        <Button button='navbarButton Pants' clickedBtn={clickedBtn} activeBtn={activeBtn}></Button>
        </div>
}