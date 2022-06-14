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
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/icons" element={<Icons colors="red" />} />
            <Route path="/uielement" element={<UIElement />} />
            <Route path="/buttons" element={<ButtonPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;