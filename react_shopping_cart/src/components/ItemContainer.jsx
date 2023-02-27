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
    
    const [items, setItems] = useState([]);

    //Reads data for the items from a json file on startup and saves it into the urls useState
    useEffect(() =>{
        async function fetchItems(){
            let itemResponse = await fetch('../../shoppingData.json');
            let items = await itemResponse.json();
            setUrls(items.coats);
            //console.log(urls);

            let i = 0; //Was having a problem with the items being added after all items were filled
            items.coats.forEach(element =>{
                if(i < items.coats.length){
                    setItems((curItems) =>{                
                        return [...curItems, <Item url={element.url} itemName={element.title} price={`\$${element.price}`}></Item>]
                    });
                }
            });
        }
        fetchItems();
    }, []);
  

    return <div className='itemContainer'>
            {/* <Item url={urls[0].url} itemName={urls[0].title} price={`\$${urls[0].price}`}></Item> */}
            {items}
        </div>
}