import './Button.css';
import React, {useState, useEffect} from 'react';

export default function Button({button}, {clickedBtn}){

    const [active, setActive] = useState('');

    function handleClick(){
        //console.log(getButtonIDs()[1]);
        //changeSelectedBtn();

        clickedBtn(getButtonIDs()[1]) //For some reason is says this passed function doesn't exist. Start here.

    }

    function getButtonIDs(){
        let stringArray = button.toString().split(" ");
        if(stringArray[1] === 'decrement'){
            return [stringArray[0], '-'];
        }
        else if(stringArray[1] === 'increment'){
            return [stringArray[0], '+'];
        }
        else{
            return stringArray;
        }
    }

    function changeSelectedBtn(){
        if(active != 'active'){
            setActive('active');
        }
        else{
            setActive('');
        }
    }

    // useEffect(() => {
    //     console.log("A button was clicked");
    // }, [clickedBtn])

    return <div className={`${button} ${active}`} onClick={handleClick}>
        <h1>{getButtonIDs()[1]}</h1>        
    </div>
}