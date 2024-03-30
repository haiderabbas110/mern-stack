import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main'
import Users from './components/User';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Memouse from "./components/Memouse";
import ParamBox from "./components/ParamBox"
import DataFetch from "./components/DataFetch"
import Form from "./components/Form"
import MemouseExp from "./components/Memouse-exp"
import ErrorPage from "./components/ErrorPage";

import EffectUseCleanup from "./components/EffectUseCleanup";

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
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users users={user} />} />
            <Route path="/users/user1" element={<User1 />} />
            <Route path="/usememo" element={<Memouse />} />

            <Route path="/reuse-hook" element={<DataFetch />} />
            <Route path="/parambox/:id" element={<ParamBox />} />
            <Route path="/form" element={<Form />} />

            <Route path="/useeffect" element={<EffectUseCleanup />} />

            <Route path="/usememoexp" element={<MemouseExp />} />
            <Route path="/*" element={<ErrorPage />} />
          </Route>

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
