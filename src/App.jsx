import React from 'react';
import Home from './pages/Home/Home';
import { Route,Routes } from 'react-router-dom';
import Disk1 from './pages/Home/Disk1/Disk1';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/new" element={<Disk1/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
