import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import { Routes, Route,  } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Services from './Pages/Home/Services/Services';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/service" element={<Services></Services>} ></Route>
        <Route path ="/service/:serviceId" element = {<ServiceDetail></ServiceDetail>}></Route>
        <Route path ="/about" element={<About></About>}></Route>
        <Route path ="/login" element={<Login></Login>}></Route>
        <Route path ="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    
     <Footer></Footer>
    </div>
  );
}

export default App;
