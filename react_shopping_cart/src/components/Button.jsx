import './Button.css';

export default function Button({button}){

    function handleClick(){
        console.log(getButtonIDs()[1]);
    }
    function getButtonIDs(){
        return button.toString().split(" ");
    }
    return <div className={button} onClick={handleClick}>
        <h1>{getButtonIDs()[1]}</h1>        
    </div>
}