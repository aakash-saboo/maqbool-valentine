"use client";
import { useState } from "react";

export default function FinalQ() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const yesButtonSize = noCount * 50 + 16;
  
    const images = [
      'https://media4.giphy.com/media/gKBrO4a0GeBC0OXM1n/giphy.gif?cid=ecf05e47unyqedzfvt09o2f4st9r9m7vf5gm2nqkziwrzmu5&ep=v1_gifs_related&rid=giphy.gif&ct=g',
    ];
  
    const handleNoClick = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setNoCount(noCount + 1);
    };
  
    const getNoButtonText = () => {
      const phrases = [
        "No",
        "KYUUUUUUU?",
        "Pakka?",
        "Sochle",
        "You are missing out on a lot!",
        "What about a date at Big Chill?",
        "PLEASE?",
        "But :*(",
        "I am going to die",
        "Yep im dead",
        "ok ur talking to Aakash's ghost",
        "please babe",
        ":((((",
        "PRETTY PLEASE",
        "Ye jo bhi ho rha hai, galat ho rha hai.",
        "No :(",
      ];
      return phrases[noCount % (phrases.length)];
    };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
          {yesPressed ? (
            <>
              <img src="https://media1.tenor.com/m/EPB7uiDGlDwAAAAC/kbc-memes-7crore-meme.gif" />
              <div className="my-4 text-4xl font-bold text-center text-white">WOOOOOO!!! I love you!! Should we plan a date now. You know where to call me ;))</div>
            </>
          ) : (
            <>
              <img
                className="h-[200px]"
                src={images[currentIndex]}
              />
              <h1 className="my-4 text-4xl text-center text-white">Will you be my Valentine, Maqbool?</h1>
              <div className="flex items-center">
                <button
                  className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                >
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
          )}
        </div>
  );
}
