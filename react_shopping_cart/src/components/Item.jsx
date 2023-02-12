import './Item.css';

export default function Item({url, itemName, price}){

    return <div className='item'>
        <img src={url}></img>
        <p className='itemName'>{itemName}</p>
        <p className='price'>{price}</p>
    </div>
}