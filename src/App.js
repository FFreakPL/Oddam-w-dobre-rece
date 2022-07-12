import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './Components/Home';
import AuthLogin from './Components/Auth/AuthLogin';
import AuthReset from './Components/Auth/AuthReset';
import HomeOrganizations from './Components/HomeOrganizations';
import AuthRegister from './Components/Auth/AuthRegister';
import FormStepsHome from './Components/Form/FormStepsHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<AuthLogin/>}/>
          <Route exact path="/reset" element={<AuthReset/>}/>
          <Route exact path="/organizations" element={<HomeOrganizations/>}/>
          <Route exact path="/register" element={<AuthRegister/>}/>
          <Route exact path="/stepsHome" element={<FormStepsHome/>}/>
           </Routes>
      </Router>
    </div>
  );
}

export default App;
