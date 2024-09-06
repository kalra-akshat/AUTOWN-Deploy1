import bitswilp from './Images/bits-wilp.png'
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
            
            <header className=''>
            <nav className='navbar'>
                <img alt="bits logo" src={bitswilp} className="bits_logo"></img>


                <ul className="navStyle">
                    <li><Link to="overview" spy={true} smooth={true} offset={0} duration={500} style={{ cursor: 'pointer' }}>Overview</Link></li>
                    <li><Link to="eventinfo" spy={true} smooth={true} offset={0} duration={500} style={{ cursor: 'pointer' }}>Info</Link></li>
                    <li><Link to="speakers" spy={true} smooth={true} offset={0} duration={500}  style={{cursor:'pointer'}}>Speakers</Link></li>                    
                    <li><a href="/events" style={{ cursor: 'pointer' }}>Events</a></li>
                    <li><a href='/psstudents' style={{cursor:'pointer'}}>Students</a></li>                    
                    <li><Link to="contactus" spy={true} smooth={true} offset={0} duration={500}  style={{ cursor: 'pointer' }}>Contact Us</Link></li>
                    {/* <li><div className="dropdown-container">
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
                    </div></li> */}
                </ul>
            </nav>
            </header>
            <div className="mainlayout" >
                <div className="content">
                    <h2 style={{ color: '#ffffff', fontWeight:500 }}>BITS Pilani's</h2>
                    <h1 className='orbitron'><span className='orbitron' style={{ color: '#07FCAF', fontWeight:700}}>AUTO</span>wn<span className='orbitron'>'24</span></h1>
                    <h2 className='orbitron' style={{ color: '#07FCAF' }}>Future Mobility</h2>
                    <h3 style={{ color: '#01D0EA'}}>Material Science | ADAS | Electric Vehicle</h3>
                    <div className="dropdown-container">
                        <button onClick={toggleDropdown} className="dropdown-button">
                            Register
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <a className="dropdown-content-item" href='/regacs'>Material Science</a>
                                <a className="dropdown-content-item" href='/regadas'>ADAS</a>
                                <a className="dropdown-content-item" href='/regev'>Electric Vehicle</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

//green -  #07FCAF
//blue - #01D0EA