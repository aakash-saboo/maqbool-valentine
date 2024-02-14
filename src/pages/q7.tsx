import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Q7() {

    const navigate = useNavigate();
  
    const handleYesClick = () => {
      navigate('/maqbool-valentine/pages/q8');
    };
  
    return (
        <div className="-mt-16 flex h-screen flex-col items-center justify-center">
            <img
              className="h-[200px]"
              src="https://media0.giphy.com/media/H5Ad3kUEUSiYhbCrNH/giphy.gif?cid=ecf05e47eadw376tgg0182hhp6mzpkdoxixqmobgh1rvl322&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            />
            <h1 className="my-4 text-4xl text-center text-white">When are we meeting?</h1>
            <div className="flex items-center">
              {isButton1Visible && (<button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleYesClick}
              >Soon</button>)}
              <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleYesClick}
              >
                Bohot jald
              </button>
              {isButton2Visible && <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleYesClick}
              >Very Soon</button>}
            </div>
      </div> 
    );
  }