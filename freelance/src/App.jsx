import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './components/firstPage/FirstPage';
import Freelancer from './components/freelancerPage/Freelancer';
import Home from './components/Home';
import ConnectPage from './components/Connection/ConnectPage';

function App() {
  // Assuming jobList is an array of job objects


  const [isFreelancer, setFreelancer] = useState(false);

  useEffect(() => {
    console.log(isFreelancer);
  }, [isFreelancer]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<FirstPage setFreelancer={setFreelancer} />}
          />
          <Route
            path="/freelancer"
            element={<Freelancer jobList={jobList} />}
          />
          <Route
            path="/freelancerConnect"
            element={<ConnectPage/>}
          />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
