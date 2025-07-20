
function Button({ text , handleClick, value }) {
    
    return(
        <button  value ={value} onClick={handleClick} className=" hover:bg-black hover:text-white font-bold h-12 w-12 rounded-md border-2">{text}</button>
    );
}
export default Button;