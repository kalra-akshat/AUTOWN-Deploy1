import { useState } from "react"
import autownlogo from './Images/autownlogo.png'
import './Styling/Registeracs.css';
import formicon from './Images/formicon.png'
function Registeracs() {

    const projects = [
        '"Electronic Throttle valve position control"',
        '"Fuzzy Traction Control Challenge" - Advancing Vehicle Traction Control with Fuzzy Logic',
        // '"Cruise Control Innovation Challenge" - Advancing Autonomous Driving with Next-Gen Cruise Control Systems',
        '"Virtual Vehicle Diagnostics Challenge" - Revolutionizing Automotive Troubleshooting and Maintenance',
        '"DIY OBD-II Code Scanner Challenge" - Crafting Your Own Diagnostic Tool with Arduino or Raspberry Pi',
        '"Custom Vehicle Dashboard Display Challenge" - Crafting Your Own Real-Time Data Display with Arduino or Raspberry Pi',
        '"Fault Diagnosis Simulator Challenge" - Advancing Automotive Troubleshooting with Virtual Fault Scenarios',
        '"Diagnostic Decision Support System Challenge" - Innovating Automotive Troubleshooting with AI-Powered Solutions'
    ]


    const [formInput, updateFormInput] = useState({
        acsname: "",
        acsbitsemail: "",
        acsbitsid: "",
        acsparticipants: "",
        acsproj: ""
    })

    let form = document.querySelector("form");

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbxDtUdPhw_ii3sSNHLYhV0ZWrV64Ke7l5gTamtE0Ag9SNvZY8ffh8v_sCVuaxoZRpi4/exec', {
            method: "POST",
            body: data
        })
            .then(res => res.text())
            .then(window.location.href = '/')
            .then(alert("Thanks for Registering!"))
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        updateFormInput({ ...formInput, [name]: value })
    }


    return (
        <div className="mainbg">
            <div className="Regacs" id='regacs'>
                <div className="title">
                    <a href="/"><img src={autownlogo} className="autownlogo"></img></a>
                    <span className="head">Registration</span>
                </div>
                <h1 className="heading">Automotive Control Systems & Automotive Diagnostics</h1>
                <div className='regform' >

                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="subform" >
                                <label htmlFor='name'>Name</label>
                                <input className='inparea1' autoComplete='off' name='acsname' id='acsname' required="true"
                                    value={formInput.name}
                                    onChange={handleInput}
                                    type='text' placeholder='Name'></input>


                                <label htmlFor='email'>Email</label>
                                <input className='inparea1' autoComplete='off' name='acsbitsemail' id='acsbitsemail' required="true"
                                    value={formInput.email}
                                    onChange={handleInput}
                                    type='email' placeholder='Email' ></input>


                                <label htmlFor='bitsid'>BITS ID</label>
                                <input className='inparea1' autoComplete='off' name='acsbitsid' id='acsbitsid' required="true"
                                    value={formInput.bitsid} 
                                    onChange={handleInput}
                                    type='text' placeholder='BITS ID' ></input>


                                <label htmlFor='No. of Participants'>No. of Participants</label>
                                <input className='inparea1' autoComplete='off' name='acsparticipants' id='acsparticipants' required="true"
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
                                    <input type="radio" name="acsproj" className="projarea" value={project} ></input>
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

export default Registeracs;