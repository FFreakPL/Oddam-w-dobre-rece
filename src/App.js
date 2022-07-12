import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './Components/Home';
import Auth_Login from './Components/Auth/Auth_Login';
import Auth_Reset from './Components/Auth/Auth_Reset';
import Home_Organizations from './Components/Home_Organizations';
import Auth_Register from './Components/Auth/Auth_Register';
import Form_Steps_Home from './Components/Form/Form_Steps_Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Auth_Login/>}/>
          <Route exact path="/reset" element={<Auth_Reset/>}/>
          <Route exact path="/organizations" element={<Home_Organizations/>}/>
          <Route exact path="/register" element={<Auth_Register/>}/>
          <Route exact path="/stepsHome" element={<Form_Steps_Home/>}/>
           </Routes>
      </Router>
    </div>
  );
}

export default App;
