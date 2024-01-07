import {Link} from 'react-router-dom';
import './style.css';
		 
		const Header = () =>{
			return (
				<nav className='navbar'>
          <h3>My Portfolio.</h3>
          <ul className='header'>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
				  </ul>
        </nav>
			)
		}
			
		export default Header 