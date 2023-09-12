import './Styling/Eventinfo.css';
import { FaCarOn } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { FaChargingStation } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
function Eventinfo() {
    
    

    return (
        <div className='Event'>
            <div className="Events" id='eventinfo'>
                <div className="title">
                    Events
                </div>
            </div>

            <div className="box">
            <div className="card-box">
                    <div className="card">
                        <div className="front">
                            <div className='icon'><FaCarOn /></div>
                            <h4>C</h4>
                            <h5>CONNECTED</h5>
                        </div>
                        <div className='back'>
                        <p style={{ width: "90%"}}><span style={{ color: "#08bd8f", marginLeft: "15%"}}>Automotive Control Systems & Diagnostics</span></p>
                            <p><span style={{ color: "#08bd8f" }}><BsPersonCircle/></span>  Mr. Vennish & Mr. Sanjai</p>
                            <p><span style={{ color: "#08bd8f" }}><FaEnvelope/><br></br></span><a href='mailto:vennishmuthu@wilp.bits-pilani.ac.in'>vennishmuthu@wilp.bits-pilani.ac.in</a><br></br><a href='mailto:sanjai.k@pilani.bits-pilani.ac.in'>sanjai.k@pilani.bits-pilani.ac.in </a></p>
                            <p><span style={{ color: "#08bd8f" }}><FaPhoneVolume/> </span> 8056320310 || 8657592434</p>
                            <button onClick={event =>  window.location.href='/exploreacs'}>Explore Projects</button>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <div className="card">
                        <div className="front">
                            <div className='icon'><FaMicrochip /></div>
                            <h4>A</h4>
                            <h5>AUTONOMOUS</h5>
                        </div>
                        <div className='back'>
                        <p><span style={{ color: "#08bd8f"}}>Advanced Driver Assistance System</span></p>
                            <p><span style={{ color: "#08bd8f" }}><BsPersonCircle/></span>  Mr. Parjanya</p>
                            <p><span style={{ color: "#08bd8f" }}><FaEnvelope/><br></br></span><a href='mailto:parjanya.yaragani@pilani.bits-pilani.ac.in'>parjanya.yaragani@pilani.bits-pilani.ac.in</a></p>
                            <p><span style={{ color: "#08bd8f" }}><FaPhoneVolume/></span> 6354835188</p>
                            <button onClick={event =>  window.location.href='/exploreadas'}>Explore Projects</button>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <div className="card">
                        <div className="front">
                            <div className='icon'><FaShieldAlt /></div>
                            <h4>S</h4>
                            <h5>SECURED</h5>
                        </div>
                        <div className='back'>
                            <p><span style={{ color: "#08bd8f"}}>Cyber Security</span></p>
                            <p><span style={{ color: "#08bd8f" }}><BsPersonCircle/></span> Ms. Indumathi Madhu</p>
                            <p><span style={{ color: "#08bd8f" }}><FaEnvelope/><br></br></span> <a href='mailto:indumathi.m@pilani.bits-pilani.ac.in'>indumathi.m@pilani.bits-pilani.ac.in</a></p>
                            <p><span style={{ color: "#08bd8f" }}><FaPhoneVolume/></span> 7904316109</p>
                            <button onClick={event =>  window.location.href='/explorecybersec'}>Explore Projects</button>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <div className="card">
                        <div className="front">
                            <div className='icon'><FaChargingStation /></div>
                            <h4>E</h4>
                            <h5>ELECTRIFIED</h5>
                        </div>
                        <div className='back'>
                        <p><span style={{ color: "#08bd8f" }}>Electric Vehicle</span></p>
                            <p><span style={{ color: "#08bd8f" }}><BsPersonCircle/></span>  Mr. Vykunt</p>
                            <p><span style={{ color: "#08bd8f" }}><FaEnvelope/><br></br></span><a href='mailto:vykunta.rao@wilp.bits-pilani.ac.in'>vykunta.rao@wilp.bits-pilani.ac.in</a></p>
                            <p><span style={{ color: "#08bd8f" }}><FaPhoneVolume/></span>7416196828</p>
                            <button onClick={event =>  window.location.href='/exploreev'}>Explore Projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eventinfo;