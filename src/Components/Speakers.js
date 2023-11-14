import './Styling/Speakers.css'
import AshokjhaImage from './Images/Ashokjha.jpg';
import varaprasad from './Images/varaprasad.jpg';
import cybersec from './Images/cybersec.jpg';
import connected from './Images/connected.jpg';
import collab from './Images/Collaborator_ceo.jpg'

function Speakers(){
    
    const speakerdata =[{
        name:'Mr. Ashok Kumar Jha',
        designation:'Engineering Director @ ZF Group',
        image: AshokjhaImage
    },
    {
        name:'Mr. Varaprasad Nallangi',
        designation:'Director Technical ADAS @ Bosch Global Software technologies',
        image:  varaprasad
    },
    {
        name:'Mr. Aripaka Mutyalarao',
        designation:'Security Architect @ Bosch Global Software Technologies',
        image: cybersec
    },{
        name:'Mr. Kalasagar Gembali',
        designation:'Technology Consultant @ Hewlett-Packard',
        image: connected
    }]


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
            <div className='collaborator'>
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
            </div>
        
        </>
    )
}

export default Speakers;