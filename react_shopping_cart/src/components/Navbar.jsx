import './Navbar.css';
import Button from './Button.jsx';

export default function Navbar(){
    return <div className='navBar'>
        <Button buttonID='navbarButton navbarButton1'></Button>
        <Button buttonID='navbarButton navbarButton2'></Button>
        <Button buttonID='navbarButton navbarButton3'></Button>
        </div>
}