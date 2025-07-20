
function Button({ text , handleClick, value }) {
    
    return(
        <button  value ={value} onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 w-12 rounded-md ">{text}</button>
    );
}
export default Button;