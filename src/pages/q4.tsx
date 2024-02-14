import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Q4() {
    const [isButton1Visible, setIsButton1Visible] = useState(true);
    const [isButton2Visible, setIsButton2Visible] = useState(true);

    const navigate = useNavigate();
  
    const handleYesClick = () => {
      navigate('/maqbool-valentine/pages/q5');
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
              src="https://media0.giphy.com/media/QutcJFD0eBHKIVcAW8/giphy.gif?cid=ecf05e47pxrbkpd7or5jpiutvf41jrceg5v88dkmeyrgpkmx&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            />
            <h1 className="my-4 text-4xl text-center text-white">Which is my favourite icecream flavor?</h1>
            <div className="flex items-center">
              <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleYesClick}
              >
                Mujhe ice cream nhi gelato pasand hai.
              </button>
              {isButton1Visible && (<button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton1Click}
              >Hazelnut</button>)}
              {isButton2Visible && <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton2Click}
              >Vanilla</button>}
            </div>
      </div> 
    );
  }