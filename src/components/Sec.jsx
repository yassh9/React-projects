import { useState } from "react";
import Button from "./Button";
function Sec() {
    const handleClick = (e) => {
        setA(e.target.value);
        setRoll(true);
    }
    const [temp, setTemp] = useState("img/dice_1.png");
    const [roll, setRoll] = useState(false);
    const [score, setScore] = useState(0);
    const [a, setA] = useState(0);
    const handleClick1 = () => {
        let b = (Math.floor(Math.random() * 6) + 1);
        setTemp(`img/dice_${b}.png`);
        if (a == b) {
            setScore(score + parseInt(a));
        }
        else {
            setScore(score - 1);
        }
        setRoll(false);
        setA(0);
    }
    const handleClick2 = () => {
        alert("Rules: \n1. Select a number between 1 and 6.\n2. Click 'Roll Me' to roll the dice.\n3. If the rolled number matches your selection, you gain points equal to your selection.\n4. If it doesn't match, you lose 1 point.");
    }        
    return (
        <div>

            <div className="flex  h-28 justify-between items-center px-6">
                <div>
                    <h1 className="text-6xl font-bold px-8">{score} </h1>
                    <h1 className="text-xl">Total Score</h1>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-red-600 text-2xl">{roll ? "" : "You have not selected any number"}</p>
                <div className="flex gap-4">
                    <Button text="1" handleClick={handleClick} value={1} />
                    <Button text="2" handleClick={handleClick} value={2} />
                    <Button text="3" handleClick={handleClick} value={3} />
                    <Button text="4" handleClick={handleClick} value={4} />
                    <Button text="5" handleClick={handleClick} value={5} />
                    <Button text="6" handleClick={handleClick} value={6} />
                </div>
                <p>Select number</p>
            </div>
            </div>


            <div className="flex flex-col items-center justify-center ">
                <img src={temp} className="mt-10"/>
                    
            <button onClick={handleClick1} disabled={!roll}  className="border-2 w-30 text-center h-10 m-5 disabled:opacity-50 disabled:cursor-not-allowed rounded-md"> Roll Me</button>
            <button onClick={handleClick2} className="border-2 w-30 text-center h-10 rounded-md"> Show Rules</button>

            </div>

            
        </div>
    );

}
export default Sec;