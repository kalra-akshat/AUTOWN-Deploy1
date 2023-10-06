import PSstudents from "./PSstudents";
import "./Styling/Studentcard.css"
import { useState } from 'react'
function Studentcard({ data }) {

    const [cardClicked, setIsClicked] = useState(false);
    const [cardHovered, setHover] = useState(true);

    const Hovered = () => {
        setHover(oldValue => !oldValue);
    }


    const Cliked = () => {
        setIsClicked(oldValue => !oldValue);
    }

    return (
        <>

            <div className="card-box">
                <div className="card-content" >
                    <div className={cardHovered ? 'card-image-half' : ' card-image-full'}  onMouseEnter={Hovered} onMouseLeave={Hovered} onClick={Cliked}
                        style={{
                            backgroundImage: cardClicked ? `url(${data.url})` : `url(${data.url})`
                        }}
                    >
                    </div>
                </div>
                <div className="card-details">
                    {data.name}
                </div>
            </div>


            <div  className={cardClicked ? "student-detail-visible" : "student-detail-not-visible"}>
                <div onClick={Cliked} className="cross" >X</div>
                <div className="selected-image">
                    <img src={data.url}></img>                    
                </div>
                <div className="student-details">
                    <div className="name">{data.name}</div>
                    <div className="details">{data.details}</div>
                    <button>Get Resume</button>
                </div>
            </div>

        </>
    )
}

export default Studentcard;

