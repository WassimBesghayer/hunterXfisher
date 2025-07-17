import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import NavBarr from './components/NavBarr';
import Shop from './components/Shop';
import { getproduct } from './redux/productSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

import Profil from "./components/Profil";
import Register from "./components/Register";

import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import { userCurrent } from './redux/userSlice';
import Hunting from './components/Hunting';
import Camping from './components/Camping';
import Fishing from './components/Fishing';
import Basket from './components/Basket';
import { getorder } from './redux/orderSlice';


function App() {
const dispatch=useDispatch();
const [ping, setping] = useState(false)
  useEffect(() => {
     dispatch(getproduct());
      dispatch(userCurrent());
      dispatch(getorder());

  }, [ping])

  return (
    <div className="App">
      <NavBarr/>
      <Routes>
        <Route path="/" element={ <Shop  ping={ping} setping={setping}/> } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hunting" element={<Hunting  ping={ping} setping={setping}/>} />
          <Route path="/camping" element={<Camping  ping={ping} setping={setping} />} />
          <Route path="/basket" element={<Basket  ping={ping} setping={setping}/>} />
          <Route path="/fishing" element={<Fishing  ping={ping} setping={setping} />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
        </Route>

        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
          
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
