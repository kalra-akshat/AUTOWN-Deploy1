import './Styling/Event.css'
import Carousel2 from './Carousel2';
import {FaHouse} from "react-icons/fa6"


function Event(){
    
        return(
        <div className='event'>
            <div className="eheading"><div className='ehome'><a className='e-home' href="/"><FaHouse/></a> </div> <div className='ehead'>Event Highlights</div>            
            </div>
            <div className="date">28th October 2023</div>
            <div className='body2'>  
            <p className='cricpara'>WILP's First AUTOwn Cricket League: PS students vs On-Campus students<br></br><br></br>
The WILP division recently concluded its first-ever AUTOwn Cricket League, the Deccan Chargers triumphed as champions. Team Aboyam secured the runners-up position in this thrilling clash between PS and On-Campus students. Congratulations to the Deccan Chargers for their exceptional performance and to Team Aboyam for their remarkable journey!</p>
            <div className='carousel2'> <Carousel2/></div>
            {/* <div className='cricreg'> <img src={cricreg} ></img></div>  */}
            </div> 
            {/* <div className="date">18th November 2023</div> */}
        </div>
    )
}

export default Event;