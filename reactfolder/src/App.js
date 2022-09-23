import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Product/ItemListContainer';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';






function App() {


  return (
    <div className='App'>

      
      <ItemListContainer 
      greeting="Resultados"
      />
      <NavBar />
      
      <FontAwesomeIcon icon= {faCoffee}/>
      

    </div>
    
    
  );
}

export default App;
