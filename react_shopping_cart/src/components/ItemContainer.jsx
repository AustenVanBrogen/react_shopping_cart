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
            let givenItems = await itemResponse.json();
            setUrls(givenItems.coats);

            //Austen's epiphany
            setItems([]); //Clears the items list before each run

            let i = 0; //Was having a problem with the items being added after all items were filled
            givenItems.coats.forEach(element =>{
                if(i < givenItems.coats.length && items.length < givenItems.coats.length){
                    setItems((curItems) =>{
                        return [...curItems, <Item className='gridItem' url={element.url} itemName={element.title} price={`\$${element.price}`}></Item>];
                    });
                }
                i++;
            });
        }
        fetchItems();
    }, []);
  

    return <div className='itemContainer'>
            {items}
        </div>
}