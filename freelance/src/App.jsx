import { useEffect, useState } from 'react';
import './App.css'

import FirstPage from './components/firstPage/FirstPage'
import Freelancer from './components/freelancerPage/Freelancer'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import ConnectPage from './components/Connection/ConnectPage';

function App() {
  const [isfreelancer, setFreelancer] = useState(false);

  useEffect(() => {
    console.log(isfreelancer);
  }, [isfreelancer]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<FirstPage setFreelancer={setFreelancer} />}
          />
          <Route
            path="/freelancerConnect"
            element={<ConnectPage />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
