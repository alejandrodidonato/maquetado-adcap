import * as React from 'react';
import MainNavbar from './components/MainNavbar';
import MainSidebar from './components/MainSidebar';
import { Routes, Route } from 'react-router-dom';
import Movimientos from './views/movimientos';
import Configuraciones from './views/configuraciones/index';


function App() {

  return (
    <div className='app'>
      <MainSidebar />
      <main className='content'> 
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Movimientos />} />
          <Route path="/configuraciones" element={<Configuraciones />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
