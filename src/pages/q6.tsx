import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Q6() {
    const [isButton1Visible, setIsButton1Visible] = useState(true);
    const [isButton2Visible, setIsButton2Visible] = useState(true);

    const navigate = useNavigate();
  
    const handleYesClick = () => {
      navigate('/maqbool-valentine/pages/q7');
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
              src="https://media3.giphy.com/media/d90eVcMx33krzMmn8D/giphy.gif?cid=ecf05e47hfa205k1ofw90iykyeg5je9cfgj9yfichz0m6tle&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            />
            <h1 className="my-4 text-4xl text-center text-white">Where do I live?</h1>
            <div className="flex items-center">
              <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleYesClick}
              >
                Your heart &lt;3
              </button>
              {isButton1Visible && (<button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton1Click}
              >Hammersmith</button>)}
              {isButton2Visible && <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton2Click}
              >Rohini</button>}
            </div>
      </div> 
    );
  }