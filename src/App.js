import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './Components/Home';
import Local from './Components/Local';
import LoggedIn from './Components/LoggedIn';
import Login from './Components/Login';
import Reset from './Components/Reset';
import Organizations from './Components/Organizations';
import Register from './Components/Register';
import StepsHome from './Components/StepsHome';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4';
import Summary from './Components/Summary';
import ThankYou from './Components/ThankYou';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/local" element={<Local/>}/>
          <Route exact path="/loggedIn" element={<LoggedIn/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/reset" element={<Reset/>}/>
          <Route exact path="/organizations" element={<Organizations/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/stepsHome" element={<StepsHome/>}/>
          <Route exact path="/step1" element={<Step1/>}/>
          <Route exact path="/step2" element={<Step2/>}/>
          <Route exact path="/step3" element={<Step3/>}/>
          <Route exact path="/step4" element={<Step4/>}/>
          <Route exact path="/summary" element={<Summary/>}/>
          <Route exact path="/thankYou" element={<ThankYou/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
