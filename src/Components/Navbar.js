import wilp from './Images/wilp.jpg'
import './Styling/Navbar.css';
import { Link } from 'react-scroll';
import { useState } from 'react';


function Navbar() {

        const [isDropdownOpen, setDropdownOpen] = useState(false);
      
        const toggleDropdown = () => {
          setDropdownOpen(!isDropdownOpen);
        };

    return (
        <div className='mainapp'>
            <nav>
                <img alt="bits logo" src={wilp} className="bits_logo"></img>


                <ul className="navStyle">
                    <li><Link to="overview" spy={true} smooth={true} offset={0} duration={500} style={{ cursor: 'pointer' }}>Overview</Link></li>
                    <li><Link to="eventinfo" spy={true} smooth={true} offset={0} duration={500} style={{ cursor: 'pointer' }}>Info</Link></li>
                    <li><Link to="speakers" spy={true} smooth={true} offset={0} duration={500}  style={{cursor:'pointer'}}>Speakers</Link></li>                    
                    <li><a href="/events" style={{ cursor: 'pointer' }}>Events</a></li>
                    <li><a href='/psstudents' style={{cursor:'pointer'}}>Students</a></li>                    
                    <li><Link to="contactus" spy={true} smooth={true} offset={0} duration={500}  style={{ cursor: 'pointer' }}>Contact Us</Link></li>
                    <li><div className="dropdown-container">
                        <button onClick={toggleDropdown} className="dropdown-button">
                            Register
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <a className="dropdown-content-item" href='/regacs'>Connected</a>
                                <a className="dropdown-content-item" href='/regadas'>Autonomous</a>
                                <a className="dropdown-content-item" href='/regcs'>Secured</a>
                                <a className="dropdown-content-item" href='/regev'>Electrified</a>
                            </div>
                        )}
                    </div></li>
                </ul>
            </nav>
            <div className="mainlayout" >
                <div className="content">
                    <h2>BITS Pilani's<br></br>WILP</h2>
                    <h1><span style={{ color: '#08bd8f' }}>AUTO</span>wn<span>'23</span></h1>
                    <h2 className='head2'>Future Mobility</h2>
                    <h3>Connected | Autonomous | Secured | Electrified</h3>
                </div>
            </div>
        </div>
    );
}

export default Navbar;