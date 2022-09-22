import React, { useState } from 'react';

import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Directs } from './components/Directs';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Directs/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
