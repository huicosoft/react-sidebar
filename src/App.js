import React, { useState } from 'react';
import './App.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css'
import Sibedar from './Componets/Sidebar';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const menu =[
    {
      title: 'Inicio',
      route: '/',
      icon: 'home'
    },
    {
      title: 'Productos',
      route: '/productos',
      icon: 'box-open'
    },
    {
      title: 'Ventas',
      route: '/ventas',
      icon: 'piggy-bank'
    },
    {
      title: 'Usuarios',
      route: '/usuarios',
      icon: 'users'
    },
  ]

  return (
    <div className={`App ${showMenu? 'hide-menu' : 'show-menu' }`}>
      <Sibedar menuElemnts= { menu } ></Sibedar>
      <div className="layout-container">
        <header className="layout-header">
          <button className="menu-button" onClick={() => { setShowMenu(!showMenu) }} > <i className="fas fa-bars"></i>  </button>
        </header> 
      </div>
    </div>
  );
}

export default App;
