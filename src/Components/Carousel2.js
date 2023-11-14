import img1 from "./Images/img1.JPG"
import img2 from "./Images/img2.JPG"
import img3 from "./Images/img3.JPG"
import img4 from "./Images/img4.JPG"
import img5 from "./Images/img5.JPG"
import img6 from "./Images/img6.JPG"
import img7 from "./Images/img7.JPG"
import img8 from "./Images/img8.JPG"
import img9 from "./Images/img9.JPG"
import img10 from "./Images/img10.JPG"
import img11 from "./Images/img11.JPG"
import './Styling/Carousel2.css'


function Carousel2 () {
    
    const images = [
        img4,
        img10,
        img9,
        img3,
        img2,
        img11,
        img7,
        img5,
        img6,
        img8,
        img1
    ]   
    

    return (
        <div className="body">
            <div className="slider">
                <div className="slide-track">
                    {images.map( image => 
                         ( <div className="slide">
                         <img src={image}></img></div>
                        )
                        )
                    }
                    {images.map( image => 
                         ( <div className="slide">
                         <img src={image}></img></div>
                        )
                        )
                    }
                </div>
            </div>        
        </div>
    )
}

export default Carousel2;