import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Q2() {
    const [isButton1Visible, setIsButton1Visible] = useState(true);
    const [isButton2Visible, setIsButton2Visible] = useState(true);

    const navigate = useNavigate();
  
    const handleYesClick = () => {
      navigate('/will-you-be-my-valentine/pages/q3');
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
              src="https://media1.giphy.com/media/HNIZE1bTsXxWq1okyZ/giphy.gif?cid=ecf05e470pqbc6mltl6ykle9pajxunfq06lnnzn5bz5ccghe&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            />
            <h1 className="my-4 text-4xl text-center text-white">Which movie did we see on 23 April 2014</h1>
            <div className="flex items-center">
              <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleYesClick}
              >
                2 states
              </button>
              {isButton1Visible && (<button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton1Click}
              >Kai Po Che</button>)}
              {isButton2Visible && <button
                className={`mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-green-700 border-b-4 hover:border-blue  -800 border-green-800`}
                onClick={handleButton2Click}
              >Humpty Sharma ki Dulhania</button>}
            </div>
      </div> 
    );
  }