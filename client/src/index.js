import React from 'react';
import ReactDOM from 'react-dom/client';
import Met from "./Met"
import Get from "./Get"
import Singup from "./components/SingUp"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Profile from "./components/Profile"
import Cart from "./components/Cart"
import './index.css';
import App from './App';
import Navbar from "./components/Navbar"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <BrowserRouter>
 <Navbar/>
 <Routes>
      <Route path="/" element={<App />} />
      <Route path="Get" element={<Get />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Met" element={<Met />} />
      <Route path="Singup" element={<Singup />} />
      <Route path="Login" element={<Login/>} />
      <Route path="Logout" element={<Logout/>} />
     <Route path="Profile" element={<Profile/>} /> 
    </Routes>
  </BrowserRouter>
  </Provider>,
);

