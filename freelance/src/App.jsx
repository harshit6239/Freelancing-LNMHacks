
import './App.css'
import FirstPage from './components/firstPage/FirstPage'
import Freelancer from './components/freelancerPage/Freelancer'

function App() {
  let jobList = [{title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"},
  {title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"},
  {title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"},
  {title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"},
  {title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"},
  {title:"title", description:"desc iufebbfuwBOFBJKA JK FAJBGJABFOINFOAEBJFABBAEJBFEAJJBEAIBAIEBAFJBFJIBJ SABFJABJAEBJAFBJBFJBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", price:"150"}]; // Assuming jobList is an array of job objects

  return (
    <>
      {/* <FirstPage /> */}
      <Freelancer jobList={jobList} />
    </>
  )
}

export default App
