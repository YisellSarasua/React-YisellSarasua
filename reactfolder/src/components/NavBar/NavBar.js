import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faHeartPulse, faHouse, faMessage, faPeopleGroup, } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css";
function NavBar (){

    return(

        <div className="NavBar">
        
    
            <div className='Menu'>
                <div>
                <FontAwesomeIcon icon= {faBell}/>
                </div>

                <div>
                <FontAwesomeIcon icon= {faMessage}/>
                </div>

                <div>
                <FontAwesomeIcon icon= {faHouse}/>
                </div>
                
                <div>
                <FontAwesomeIcon icon= {faHeartPulse}/>
                </div>

                <div>
                <FontAwesomeIcon icon= {faPeopleGroup}/>
                </div>

            </div>

        </div>
          
    );
}
export default NavBar;
