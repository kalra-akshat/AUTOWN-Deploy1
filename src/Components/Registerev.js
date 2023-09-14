import { useState } from "react"
import autownlogo from './Images/autownlogo.png'
import formicon from './Images/formicon.png'
import './Styling/Registerev.css';
function Registerev() {

    const projects = [
        '"Miniature Electric Car Design Challenge" - Shaping the Future of Sustainable Mobility',
        '"Wireless Charging for Electric Vehicles Challenge" - Pioneering Effortless and Eco-Friendly EV Charging Solutions',
        '"Regenerative Braking Innovation Challenge" - Transforming Vehicle Braking into Energy Harvesting',
        '"Solar-Powered EV Charging Station Design Challenge" - Illuminating Sustainable Mobility with Solar Energy',
        '"Dual-Cell Battery Management System (BMS) Challenge" - Elevating Battery Performance and Safety with Arduino and BMS Technology'
    ]


    const [formInput, updateFormInput] = useState({
        csname: "",
        csbitsemail: "",
        csbitsid: "",
        csparticipants: "",
        csproj: ""
    })

    let form = document.querySelector("form");

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbxDQ3dIYHYN8UGvGc4HBNyFG3Rwn4o85cJuQEvxNPF60KKStwIl8olZJSnJKrprDjE/exec', {
            method: "POST",
            body: data
        })
            .then(res => res.text())
            .then(window.location.href = '/')
            .then(alert("Thanks for Registeringent!"))
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        updateFormInput({ ...formInput, [name]: value })
    }


    return (
        <div className="mainbg">
            <div className="Regev" id='regev'>
                <div className="title">
                    <a href="/"><img src={autownlogo} className="autownlogo"></img></a>
                    <span className="head">Registration</span>
                </div>
                <h1 className="heading">Electric Vehicle</h1>
                <div className='regform' >

                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="subform" ><label htmlFor='name'>Name</label>
                                <input className='inparea1' autoComplete='off' name='evname' id='evname' required="true"
                                    value={formInput.name}
                                    onChange={handleInput}
                                    type='text' placeholder='Name'></input>


                                <label htmlFor='email'>Email</label>
                                <input className='inparea1' autoComplete='off' name='evbitsemail' id='evbitsemail' required="true"
                                    value={formInput.email}
                                    onChange={handleInput}
                                    type='text' placeholder='Email' ></input>


                                <label htmlFor='bitsid'>BITS ID</label>
                                <input className='inparea1' autoComplete='off' name='evbitsid' id='evbitsid' required="true"
                                    value={formInput.bitsid}
                                    onChange={handleInput}
                                    type='text' placeholder='BITS ID' ></input>


                                <label htmlFor='No. of Participants'>No. of Participants</label>
                                <input className='inparea1' autoComplete='off' name='evparticipants' id='evparticipants' required="true"
                                    value={formInput.participants}
                                    onChange={handleInput}
                                    type='text' placeholder='No. of Participants' ></input>
                            </div>
                            <div >
                                <img src={formicon}></img>
                            </div>
                        </div>
                        <div className="project">
                            <h3 className="projarea projheading">Select Project</h3>
                            {projects.map((project) => (
                                <>
                                    <input type="radio" name="evproj" className="projarea" value={project} ></input>
                                    <label htmlFor="projinput">{project}</label><br></br><br></br><br></br></>)
                            )}
                        </div>

                        <input className='subarea' type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registerev;