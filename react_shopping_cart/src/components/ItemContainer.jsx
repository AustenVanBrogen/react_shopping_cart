import React, {useState, useEffect} from 'react';
import './ItemContainer.css';
import Item from './Item.jsx';

export default function ItemContainer(){
    const [urls, setUrls] = useState(['']);                 

    function initialize(givenJson)
    {
        items = givenJson;
        console.log(items.coats[0].url);
        // setUrls( ['imgs/MenJacket1.png'] ); //Apparently runs on every render
    }

    function clickTest(){
        console.log(items);
    }

    useEffect(() =>{

        async function fetchItems(){
            let itemResponse = await fetch('../../shoppingData.json');
            let items = await itemResponse.json();
            //console.log(items);
            setUrls([items.coats[0].url]);
        }

        // console.log(items.coats[0].url);
        
        fetchItems();
    }, []);
  

    return <div className='itemContainer' onClick={clickTest}>
            <Item url={urls[0]}></Item>
        </div>
}