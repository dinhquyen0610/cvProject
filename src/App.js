import { useState, createContext, useEffect, useRef } from 'react'

import Header from './Component/Header/Header';
import './App.css'
import Sidebar from './Component/Sidebar/Sidebar';
import Main from './Component/Main/Main';
function App() {
  
  return (
    <div className='container'>
      <Header />
      <div className='wrap'>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}
export default App;

