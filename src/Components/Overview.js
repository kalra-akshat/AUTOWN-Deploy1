import autoimage from './Images/autownlogoblack.jpg'
import cimage from './Images/colabimage5.png'
import './Styling/Overview.css'
import trpohy from './Images/trophy-icon-5.jpg'

function Overview() {



    return (
        <>
            <div className="overview" id='overview'>
            <h2 className='orbitron'><span className='orbitron' style={{ color: '#07FCAF', fontWeight:700}}>AUTO</span>wn<span className='orbitron'>'24</span></h2>
                <div className="main">
                    {/* <div className="collab"><p>In collaboration with</p><img className="collabimg" src={cimage}></img><p>Presents</p><img className="collabimg2" src={autoimage}></img></div> */}
                    <div className="overview-text">
                        <p className='line-spacing'>Welcome to BITS AUTOwn'24, proudly presented under the banner of MADE - Material science, ADAS, and Electric Vehice. As an innovative platform, we unite industry pioneers to showcase their cutting-edge products while fostering collaboration with our ingenious students.
                        Embracing the CASE ethos, participants can engage in thrilling competitions within the realms of Connected technologies, Autonomous systems, Security protocols, and Electrification advancements. Join us in shaping the future, where industry excellence converges with student ingenuity. 
                        <br></br> Explore, collaborate, and champion the CASE revolution at BITS AUTOwn'24!  <br></br><br></br> 
                        Participation Open to All.<br></br>Exicting Cash Prize for the Winners !</p>
                    
                        <div className="cashprize">
                            <img src={trpohy}></img>
                            <div className='cash'>₹ 50,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overview;