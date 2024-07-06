import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import UserList from './components/UserList';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/users' element={<UserList/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
