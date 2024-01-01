import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MainNavBar from './components/MainNavBar';
import {Routes, Route, Navigate} from 'react-router-dom';
import BookForm from './pages/BookForm'
import BookList from './pages/BookList'
import BookTable from './pages/BookTable'
import HomeComponent from './pages/HomeComponent'
import BookElement from './pages/BookElement';
import BookEdit from './pages/BookEdit';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainNavBar></MainNavBar>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>} ></Route>
        <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
        <Route path="/form" element={<BookForm></BookForm>}></Route>
        <Route path="/table" element={<BookTable></BookTable>}>
          <Route path=":id" element={<BookElement></BookElement>}></Route>
        </Route>
        <Route path="/list" element={<BookList></BookList>}></Route>
        <Route path="/edit/:id" element={<BookEdit></BookEdit>}></Route>
      </Routes>
      <Footer name="Krupa Thumar"></Footer>
    </div>
  );
}


export default App;
