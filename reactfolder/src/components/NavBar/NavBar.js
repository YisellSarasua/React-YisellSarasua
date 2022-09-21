import{fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavBar (){

    return(

        <div className="NavBar">
            
            <fontAwesomeIcon icon ={faCartShopping } /> 

        
            <h2>
                Menu
            </h2>

            <ul>
                <li>Alert</li>
                <li>Chat</li>
                <li>Home</li>
                <li>Community</li>
            </ul>
        </div>
          
    );
}
export default NavBar;
