import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Pages/About';
import Resume from './Components/Resume';
import Contact from './Pages/Contact';
import Works from './Pages/Works';
import NabbarForMabail from './Components/NavbarForMobail';


function App() {
  return (
    <div>
      <Navbar/>
      <NabbarForMabail/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/resume' element={<Resume/>}/>
<Route path='/works' element={<Works/>}/>
<Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
