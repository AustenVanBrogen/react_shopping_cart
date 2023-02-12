import React, {useState, useEffect} from 'react';
import './ItemContainer.css';
import Item from './Item.jsx';

export default function ItemContainer(){
    const [urls, setUrls] = useState([
        {
            "title": "",
            "url": "",
            "price:": 0
        }
    ]);                 

    //Reads data for the items from a json file on startup
    useEffect(() =>{

        async function fetchItems(){
            let itemResponse = await fetch('../../shoppingData.json');
            let items = await itemResponse.json();
            setUrls(items.coats);
            console.log(urls);
        }

        // console.log(items.coats[0].url);
        
        fetchItems();
    }, []);
  

    return <div className='itemContainer'>
            <Item url={urls[0].url} itemName={urls[0].title} price={`\$${urls[0].price}`}></Item>
        </div>
}