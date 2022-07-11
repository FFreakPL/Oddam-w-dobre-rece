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
           </Routes>
      </Router>
    </div>
  );
}

export default App;
