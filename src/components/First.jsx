const First = () => {
  let a = true;
  const handleClick = () => {
    
    a = false;

  }

  return (
    <div className={`flex items-center justify-center h-screen ${a ? '' : 'hidden'}`}>
      <div className="flex flex-col md:flex-row w-fit ">

        <div className="flex width-1/2 bg-amber-200">
          <img src="img/dice.png" alt="" className="w-150 h-120" />
        </div>


        <div className=" flex items-center justify-center w-1/2 bg-amber-700 ">
          <div className=" flex flex-col items-center justify-center ">
            <h1 className="text-7xl font-extrabold">DICE GAME</h1>
            <button className="bg-black text-white py-2 px-4 rounded-xl ml-auto mt-5" onClick={handleClick}>Play Now</button>
          </div>
        </div>


      </div>
    </div>
  );
}
export default First;