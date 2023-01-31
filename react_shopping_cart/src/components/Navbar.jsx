import './Navbar.css';
import Button from './Button.jsx';

export default function Navbar(){
    return <div className='navBar'>
        <Button button='navbarButton Jackets'></Button>
        <Button button='navbarButton Tops'></Button>
        <Button button='navbarButton Boots'></Button>
        <Button button='navbarButton Pants'></Button>
        </div>
}