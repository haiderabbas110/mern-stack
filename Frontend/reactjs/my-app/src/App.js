import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Mybutton from './components/Mybutton';
import Counter from './components/counter';
import Users from './components/User';
import { useState } from 'react';
import UserFetch from './components/UserFetch';
import Home from './pages/Home';
import About from './pages/About';
import Memouse from "./components/Memouse";

const list = [
  {
    id: 1,
    name: "Ali",
  },
  {
    id: 2,
    name: "Ahmed",
  },
  {
    id: 3,
    name: "Qasim",
  }

]

function App() {
  const [user, setUser] = useState(list)

  let submit = () => {
    console.log("clicked");
  }


  let mysubmit = () => {
    console.log("22");
  }

  /* === FUNCTION AS PROP ==== */
  let deletion = (id) => {
    let newlist = user.filter((user) => user.id != id)
    setUser(newlist);
    console.log(id);
  }
  let User1 = () => {
    return (
      <h1>Comming User 1</h1>
    )

  }
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users users={user} />} />
          <Route path="/users/user1" element={<User1 />} />
          <Route path="/usememo" element={<Memouse />} />
        </Routes>
      </BrowserRouter>



      {/* <Users users={user} handDelete={deletion} /> */}
      {/* <Mybutton label="Click Here" buttonCLick={submit} />
      <Mybutton label="Click Here" buttonCLick={mysubmit} />
      <Counter />
      <UserFetch /> */}




    </>
  );
}

export default App;
