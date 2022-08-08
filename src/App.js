import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Home/Login/Login";
import Registration from "./pages/Home/Registration/Registration";


function App() {
  return (
    <div className="App">
        <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Routes>
      
      </Router>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
