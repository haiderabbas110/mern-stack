import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import RegisterForm from './pages/Register';
import LoginForm from './pages/Login';
import DashbaordPage from './pages/Dashboard';
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
import Callbackuse from "./components/Callbackuse";
import FileUpload from "./pages/UploadImage";
import RealTimeDBAdd from "./components/FireBase/FireBaseRealTimeDB/Crud/Add";
import RealTimeDBList from "./components/FireBase/FireBaseRealTimeDB/Crud/List";

import FireStoreDatabaseAdd from "./components/FireBase/FireStore/Add";
import FireStoreDatabaseList from "./components/FireBase/FireStore/List";

import ViewMessage from "./components/FireBase/Cloud-Message/View-Message";

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
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/dashboard" element={<DashbaordPage />} />
            <Route path="/users" element={<Users users={user} />} />
            <Route path="/users/user1" element={<User1 />} />
            <Route path="/usememo" element={<Memouse />} />
            <Route path="/reuse-hook" element={<DataFetch />} />
            <Route path="/parambox/:id" element={<ParamBox />} />
            <Route path="/form" element={<Form />} />
            <Route path="/useeffect" element={<EffectUseCleanup />} />
            <Route path="/usememoexp" element={<MemouseExp />} />
            <Route path="/usecallback" element={<Callbackuse />} />
            <Route path="/uploadimage" element={<FileUpload />} />
            <Route path="/FirebaseRealTimeDB" element={<RealTimeDBAdd />} />
            <Route path="/RealTimeDBList" element={<RealTimeDBList />} />
            <Route path="/FireStoreDatabaseAdd" element={<FireStoreDatabaseAdd />} />
            <Route path="/FireStoreDatabaseList" element={<FireStoreDatabaseList />} />


            <Route path="/CloudMessage" element={<ViewMessage />} />
            
            
            
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
