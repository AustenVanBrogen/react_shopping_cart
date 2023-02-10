import './Item.css';

export default function Item({url}){

    return <div className='item'>
        <img src={url}></img>
    </div>
}