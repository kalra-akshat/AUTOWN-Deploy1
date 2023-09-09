import Eventinfo from "./Eventinfo";
import Navbar from "./Navbar";
import Overview from "./Overview";
import ContactUs from "./Contactus";
import Footer from "./Footer";
import './Styling/Mainpage.css';


function MainPage() {
    return (
        <div className="mainpage">
            <Navbar />
            <Overview />
            <Eventinfo />
            <ContactUs />
            {/* <Footer/> */}
        </div>
    );
}

export default MainPage;