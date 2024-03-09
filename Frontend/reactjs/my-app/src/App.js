import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Mybutton from './components/Mybutton';
import Counter from './components/counter';
import Users from './components/User';
import { useState } from 'react';
import UserFetch from './components/UserFetch';

const list = [
  {
    id:1,
    name:"Ali",
  },
  {
    id:2,
    name:"Ahmed",
  },
  {
    id:3,
    name:"Qasim",
  }

]

function App() {
  const [user , setUser] = useState(list)

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
  return (
    <>
      <Header />
      <Login />
      <Users users={user} handDelete={deletion} />
      <Mybutton label="Click Here" buttonCLick={submit} />
      <Mybutton label="Click Here" buttonCLick={mysubmit} />
      <Counter />
      <UserFetch userID={1} />


    </>
  );
}

export default App;
