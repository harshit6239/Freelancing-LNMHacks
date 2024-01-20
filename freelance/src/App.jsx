import { useEffect, useState } from 'react';
import './App.css'

import FirstPage from './components/firstPage/FirstPage'
import Freelancer from './components/freelancerPage/Freelancer'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import ConnectPage from './components/Connection/ConnectPage';
import Jobdes from './components/JobDes/jobdes';
function App() {

  let jobList = [{id:1,title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"1500"},
  {id:2,title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"120"},
  {id:3,title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"130"},
  {id:4,title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"},
  {id:5,title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"},
  {id:6,title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"}]; // Assuming jobList is an array of job objects

      

  const [isfreelancer, setFreelancer] = useState(false);

  useEffect(() => {
    console.log(isfreelancer);
  }, [isfreelancer]);

  return (
    <>
      <Router>
        <Routes>

        <Route  path="/" element={<FirstPage setFreelancer={setFreelancer} />} />
        <Route  path="/freelancer" element={<Freelancer jobList={jobList} />} />
        <Route path="/freelancer/job/:id" element={<Jobdes jobList={jobList}></Jobdes>} />



        </Routes>
      </Router>
    </>
  )
}

export default App;
