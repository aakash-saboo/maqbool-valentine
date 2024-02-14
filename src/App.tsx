"use client";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Q2 from './pages/q2'
import Q3 from './pages/q3'
import Q4 from './pages/q4'
import Q5 from './pages/q5'
import Q6 from './pages/q6'
import Q7 from './pages/q7'
import Q8 from './pages/q8'
import Q9 from './pages/q9'
import FinalQ from './pages/final-q';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/will-you-be-my-valentine/" element={<Page />} />
        <Route path="/will-you-be-my-valentine/pages/q2" element={<Q2/>} />
        <Route path="/will-you-be-my-valentine/pages/q3" element={<Q3/>} />
        <Route path="/will-you-be-my-valentine/pages/q4" element={<Q4/>} />
        <Route path="/will-you-be-my-valentine/pages/q5" element={<Q5/>} />
        <Route path="/will-you-be-my-valentine/pages/q6" element={<Q6/>} />
        <Route path="/will-you-be-my-valentine/pages/q7" element={<Q7/>} />
        <Route path="/will-you-be-my-valentine/pages/q8" element={<Q8/>} />
        <Route path="/will-you-be-my-valentine/pages/q9" element={<Q9/>} />
        <Route path="/will-you-be-my-valentine/pages/final-q" element={<FinalQ/>} />
      </Routes>
    </Router>
  );
}

export function Page() {

  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/will-you-be-my-valentine/pages/q2');
  };

  return (
      <div className="-mt-16 flex h-screen flex-col items-center justify-center">
          <img
            className="h-[200px]"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2o0andnMjB0ZnRsZWJxbXB2aGN5OXd1eXZ6enE3M2Fuam5pd2hsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ie4CIIvQS0bk3zwZlM/giphy.gif"
          />
          <h1 className="my-4 text-4xl text-center text-white">Can I ask some questions, please?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              onClick={handleYesClick}
            >
              Yes
            </button>
          </div>
    </div> 
  );
}