import React from 'react';

import './App.scss';
import Admin from './pages/Admin';
import Signin from './pages/Admin/Signin';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='app'>
      <h1>Web personal - Client</h1>
      <Admin />
      <Signin />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
