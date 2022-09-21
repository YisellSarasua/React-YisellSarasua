import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Product/ItemListContainer';
import{fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';






function App() {


  return (
    <div className='App'>
      <ItemListContainer 
      greeting="Mi tienda de excursiones"
      />
      <NavBar />
      
      

    </div>
    
    
  );
}

export default App;
