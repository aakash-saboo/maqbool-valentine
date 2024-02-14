import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Q5() {
    const [isButton1Visible, setIsButton1Visible] = useState(true);
    const [isButton2Visible, setIsButton2Visible] = useState(true);

    const navigate = useNavigate();
  
    const handleYesClick = () => {
      navigate('/will-you-be-my-valentine/pages/q6');
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
              src="https://media2.giphy.com/media/mBGcf7ReM5FHVCSyHT/giphy.gif?cid=ecf05e47rv0vgdhmail5p2xxfsi3uqj7rhbukggmfvtl9plh&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            />
            <h1 className="my-4 text-4xl text-center text-white">Which is my favourite dessert?</h1>
            <div className="flex items-center">
              {isButton1Visible && (<button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton1Click}
              >Ras Malai</button>)}
              {isButton2Visible && <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton2Click}
              >Gelato (if you have learnt from your mistake)</button>}
              <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleYesClick}
              >
                You
              </button>
            </div>
      </div> 
    );
  }