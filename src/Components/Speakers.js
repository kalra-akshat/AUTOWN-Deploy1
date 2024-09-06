import './Styling/Speakers.css'
import AshokjhaImage from './Images/Ashokjha.jpg';
import varaprasad from './Images/varaprasad.jpg';
import cybersec from './Images/cybersec.jpg';
import connected from './Images/connected.jpg';
import collab from './Images/Collaborator_ceo.jpg';
import Senthilkumaran from './Images/SenthilkumaranVaratharajan.png';
import Pinaki from './Images/PinakiBiswas.png';

function Speakers(){
    
    const speakerdata =[{
        name:'Mr. Senthilkumaran Varatharajan',
        designation:`Associate Chief Engineer : Head - Materials Technology, 
Mahindra Research Valley, Mahindra & Mahindra Ltd. Chennai`,
        image: Senthilkumaran
    },
    {
        name:'Mr. Pinaki Biswas ',
        designation:`Head Product Application Research Group at Tata Steel
`,
        image: Pinaki
    },
    // {
    //     name:'Mr. Aripaka Mutyalarao',
    //     designation:'Security Architect @ Bosch Global Software Technologies',
    //     image: cybersec
    // },{
    //     name:'Mr. Kalasagar Gembali',
    //     designation:'Technology Consultant @ Hewlett-Packard',
    //     image: connected
    // }
    ]


    return (
        <>  

            <div className='speakerheading' id='speakers'> Speakers </div>
            
            <div className="speakers">
                {speakerdata.map( speaker =>
                <div className="speakerbox">
                    <div className="speaker-image">
                    <img src={speaker.image}></img>
                    </div>
                    <div className="speaker-name">
                        {speaker.name}
                    </div>
                    <div className="speaker-designation">
                        {speaker.designation}
                    </div>
                </div>
                )}
                
            </div>
            {/* <div className='collaborator'>
            <div className='speakerbox'>
            <div className='colabhead'> Collaborator</div>
                <div className="speaker-image">
                    <img src={collab}></img>
                    </div>
                    <div className="speaker-name">
                        Mr. Rajesh Kumar A.
                    </div>
                    <div className="speaker-designation">
                    CEO @ AIC T-Hub

                    </div>
            </div>
            </div> */}
        
        </>
    )
}

export default Speakers;