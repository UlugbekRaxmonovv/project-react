import React from 'react';
import Home from './pages/Home/Home';
import { Route,Routes } from 'react-router-dom';
import Disk1 from './pages/Home/Disk1/Disk1';
import About from './pages/Home/About/About';
import BogLanish from './pages/Home/Bog\'lanish/Bog\'lanish';
import Rahbariyat from './pages/Home/Rahbariyat/Rahbariyat';
import TarkibiyBulinmalar from './pages/Home/TarkibiyBulinmalar/TarkibiyBulinmalar';
import Vakansiya from './pages/Home/Vakansiya/Vakansiya';
import Shnk from './pages/Shnk/Shnk';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<Disk1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<BogLanish/>}/>
        <Route path="/management" element={<Rahbariyat/>}/>
        <Route path="/structural-divisions" element={<TarkibiyBulinmalar/>}/>
        <Route path="/vacancies" element={<Vakansiya/>}/>
        <Route path="/shnk" element={<Shnk/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
