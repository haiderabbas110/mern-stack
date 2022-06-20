import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from './components/Partial/Main/Dashboard';
import Forms from './components/Partial/Main/Forms';
import Icons from './components/Partial/Main/Icons';
import Main from './components/Partial/Main/Main';
import Sidebar from './components/Partial/Sidebar/Sidebar';
import UIElement from './components/Partial/Main/UiElements';
import ButtonPage from './components/Partial/Main/ButtonPage';
// import smooking from './components/Partial/Main/color';
const App = () => {
  
   const handleDelete  = () => {
    
    const userID = false
    let isLoggedIn = userID === true ? "User is logged in" : "User is logged out";
    alert(isLoggedIn)
    return isLoggedIn;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/icons" element={<Icons colors="red" />} />
            <Route path="/uielement" element={<UIElement data={handleDelete} />}  />
            <Route path="/buttons" element={<ButtonPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;