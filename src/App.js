
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import UserList from './components/UserList';
import Home from './components/Home';
import { MyProvider } from './context/CommonContext';
function App() {
  
  return (
    
    <div className="App">
      <MyProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/users' element={<UserList/>}/>
      </Routes>
      </BrowserRouter>
      </MyProvider>

    </div>
  );
}

export default App;
