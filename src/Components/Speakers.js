import './Styling/Speakers.css'

function Speakers(){
    
    const speakerdata =[{
        name:'speaker1',
        designation:'xyz',
        image:''
    },
    {
        name:'speaker1',
        designation:'xyz',
        image:''
    },
    {
        name:'speaker1',
        designation:'xyz',
        image:''
    }]


    return (
        <>  
            <div className='speakerheading'> Speakers </div>
            <div className="speakers">
                {speakerdata.map( speaker =>
                <div className="speakerbox">
                    <div className="speaker-image">
                        {speaker.name}
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

        
        </>
    )
}

export default Speakers;