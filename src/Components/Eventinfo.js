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
                    Info
                </div>
            </div>

            <div className="box">
            <div className="card-box">
                    <div className="card">
                        <div className="front">
                            <div className='icon'><FaCarOn /></div>
                            <h4>M</h4>
                            <h5>MATERIAL SCIENCE</h5>
                        </div>
                        <div className='back'>
                        <p className='card-head' style={{ width: "100%"}}><span style={{ color: "#08bd8f"}}>Automotive Control Systems & Diagnostics</span></p>
                            <p ><span style={{ color: "#08bd8f" }}><BsPersonCircle/></span>  Mr. Vennish & Mr. Sanjai</p>
                            <p><span style={{ color: "#08bd8f" }}>
                                <a className='up' style={{ color: "#08bd8f" }} href='mailto:vennishmuthu@wilp.bits-pilani.ac.in' ><FaEnvelope/>
                                    </a><br></br></span><a className='hide' href='mailto:vennishmuthu@wilp.bits-pilani.ac.in'>vennishmuthu@wilp.bits-pilani.ac.in</a><br></br><a className='hide'  href='mailto:sanjai.k@pilani.bits-pilani.ac.in'>sanjai.k@pilani.bits-pilani.ac.in </a></p>
                            <p ><span style={{ color: "#08bd8f" }}><FaPhoneVolume/> </span> 8056320310 || 8657592434</p>
                            <button onClick={event =>  window.location.href='/exploreacs'}>Explore Projects</button>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <div className="card">
                        <div className="front">
                            <div className='icon'><FaMicrochip /></div>
                            <h4>AD</h4>
                            <h5>ADAS</h5>
                        </div>
                        <div className='back'>
                        <p className='card-head'><span style={{ color: "#08bd8f"}}>Advanced Driver Assistance System</span></p>
                            <p ><span style={{ color: "#08bd8f" }}><BsPersonCircle/></span>  Mr. Parjanya</p>
                            <p><span style={{ color: "#08bd8f" }}>
                            <a className='up' style={{ color: "#08bd8f"}} href='mailto:parjanya.yaragani@pilani.bits-pilani.ac.in' ><FaEnvelope/></a><br></br></span><a className='hide' href='mailto:parjanya.yaragani@pilani.bits-pilani.ac.in'>parjanya.yaragani@pilani.bits-pilani.ac.in</a></p>
                            <p ><span style={{ color: "#08bd8f" }}><FaPhoneVolume/></span> 6354835188</p>
                            <button onClick={event =>  window.location.href='/exploreadas'}>Explore Projects</button>
                        </div>
                    </div>
                </div>
                {/* <div className="card-box">
                    <div className="card">
                        <div className="front">
                            <div className='icon'><FaShieldAlt /></div>
                            <h4>S</h4>
                            <h5>SECURED</h5>
                        </div>
                        <div className='back'>
                            <p className='card-head' ><span style={{ color: "#08bd8f"}}>Cyber Security</span></p>
                            <p ><span style={{ color: "#08bd8f" }}><BsPersonCircle/></span> Ms. Indumathi Madhu</p>
                            <p><span style={{ color: "#08bd8f" }}>
                                <a style={{ color: "#08bd8f" }} href='mailto:indumathi.m@pilani.bits-pilani.ac.in' ><FaEnvelope/></a>
                                <br></br></span> <a className='hide' href='mailto:indumathi.m@pilani.bits-pilani.ac.in'>indumathi.m@pilani.bits-pilani.ac.in</a></p>
                            <p ><span style={{ color: "#08bd8f" }}><FaPhoneVolume/></span> 7904316109</p>
                            <button onClick={event =>  window.location.href='/explorecybersec'}>Explore Projects</button>
                        </div>
                    </div>
                </div> */}
                <div className="card-box">
                    <div className="card">
                        <div className="front">
                            <div className='icon'><FaChargingStation /></div>
                            <h4>E</h4>
                            <h5>ELECTRIC VEHICLE</h5>
                        </div>
                        <div className='back'>
                        <p className='card-head'><span style={{ color: "#08bd8f" }}>Electric Vehicle</span></p>
                            <p ><span style={{ color: "#08bd8f" }}><BsPersonCircle/></span>  Mr. Vykunt</p>
                            <p><span style={{ color: "#08bd8f" }}><a style={{ color: "#08bd8f" }} href='mailto:vykunta.rao@wilp.bits-pilani.ac.in'><FaEnvelope/></a><br></br></span><a className='hide' href='mailto:vykunta.rao@wilp.bits-pilani.ac.in'>vykunta.rao@wilp.bits-pilani.ac.in</a></p>
                            <p ><span style={{ color: "#08bd8f" }}><FaPhoneVolume/></span>7416196828</p>
                            <button onClick={event =>  window.location.href='/exploreev'}>Explore Projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eventinfo;