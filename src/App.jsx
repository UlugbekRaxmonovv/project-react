import React from 'react';
import Home from './pages/Home/Home';
import { Route,Routes } from 'react-router-dom';
import Disk1 from './pages/Home/Disk1/Disk1';
import About from './pages/Home/About/About';
import BogLanish from './pages/Home/Bog\'lanish/Bog\'lanish';
import Rahbariyat from './pages/Home/Rahbariyat/Rahbariyat';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<Disk1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<BogLanish/>}/>
        <Route path="/management" element={<Rahbariyat/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
