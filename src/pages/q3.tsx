import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Q3() {
    const [isButton1Visible, setIsButton1Visible] = useState(true);
    const [isButton2Visible, setIsButton2Visible] = useState(true);

    const navigate = useNavigate();
  
    const handleYesClick = () => {
      navigate('/will-you-be-my-valentine/pages/q4');
    };

    const handleButton1Click = () => {
        setIsButton1Visible(false);
    };

    const handleButton2Click = () => {
        setIsButton2Visible(false);
    };
  
    return (
        <div className="-mt-16 flex h-screen flex-col items-center justify-center">
            <img
              className="h-[200px]"
              src="https://media1.giphy.com/media/cOdw8CNcNkkJBrWllC/giphy.gif?cid=ecf05e47dzq50ymhpy97ytfknsf4yjz40msqd2hdvfc9ajvn&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            />
            <h1 className="my-4 text-4xl text-center text-white">What is the sum of my birth date and birth month?</h1>
            <div className="flex items-center">
            {isButton1Visible && (<button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton1Click}
              >21</button>)}
              <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleYesClick}
              >
                Mujhe Maths nhi aata :)
              </button>
              {isButton2Visible && <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton2Click}
              >19</button>}
            </div>
      </div> 
    );
  }