import Home from "./pages/home/Home.jsx";
import PersonIcon from '@mui/icons-material/Person';
import Profile from "./components/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { useContext } from "react";
import {AuthContext} from "./context/AuthContext";
import Payment from "./pages/Payment.jsx";
import TrainYourPet from "./pages/TrainYourPet.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {

  const {user}=useContext(AuthContext);
  return(
    <Router>
      <Routes>
        <Route exact path="/"
            element={user ? < Home/> : <Register/>}
        />
        <Route  path="/login"
            element={user ?
              //<Login/> 
            <Navigate to="/"/> 
            : <Login/>}
        />
        <Route  path="/register"
            element={ user ?
              //<Login/> 
            <Navigate to="/"/>
             : <Register/> }
        />
        <Route path="/payment"
        element={<Payment/>}
        />
        <Route path="/trainyourpet"
        element={<TrainYourPet/>}
        />
        <Route  path="/profile/:username"
            element={ <Profile/> }
        /> 
      </Routes>
    </Router>
  );
   
}

export default App;
