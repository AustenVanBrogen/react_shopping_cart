import './Item.css';
import Button from './Button.jsx';

export default function Item({url, itemName, price}){

    return <div className='item'>
        <img src={url}></img>
        <p className='itemName'>{itemName}</p>
        <p className='price'>{price}</p>
        <div className='cartAdders'>
            <Button button='incrementButton decrement'></Button>
            <Button button='incrementButton increment'></Button>
        </div>
        
    </div>
}