import binocs from './Images/binocs.png'
import './Styling/Overview.css'
import trpohy from './Images/trophy-icon-5.jpg'

function Overview() {



    return (
        <>
            <div className="overview" id='overview'>
                <h2 >AUTOwn'23</h2>
                <div className="main">
                    <img className="binoc" src={binocs}></img>
                    <div className="overview-text">
                        <p>Welcome to BITS AUTown'23, proudly presented under the banner of CASE - Connected, Autonomous, Secured, and Electrified. As an innovative platform, we unite industry pioneers to showcase their cutting-edge products while fostering collaboration with our ingenious students.
                        Embracing the CASE ethos, participants can engage in thrilling competitions within the realms of Connected technologies, Autonomous systems, Security protocols, and Electrification advancements. Join us in shaping the future, where industry excellence converges with student ingenuity. 
                        <br></br> Explore, collaborate, and champion the CASE revolution at BITS AUTown'23!  <br></br><br></br> 
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