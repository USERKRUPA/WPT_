import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import {Routes, Route} from 'react-router-dom';
import HomeComponent from './pages/HomeComponent'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login';
import UserComponent from './pages/UserComponent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/adduser" element={<UserComponent></UserComponent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
