import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Mybutton from './components/Mybutton';
import Counter from './components/counter';
function App() {
  let submit = () => {
    console.log("clicked");
  }


  let mysubmit = () => {
    console.log("22");
  }
  return (
    <>
      <Header />
      <Login />
      <Mybutton label="Click Here" buttonCLick={submit} />
      <Mybutton label="Click Here" buttonCLick={mysubmit} />
      <Counter />


    </>
  );
}

export default App;
