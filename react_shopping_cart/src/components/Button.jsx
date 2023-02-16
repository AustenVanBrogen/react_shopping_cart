import './Button.css';

export default function Button({button}){

    function handleClick(){
        console.log(getButtonIDs()[1]);
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
    return <div className={button} onClick={handleClick}>
        <h1>{getButtonIDs()[1]}</h1>        
    </div>
}