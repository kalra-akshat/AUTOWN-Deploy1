import { useState } from "react"
import autownlogo from './Images/autownlogo.png'
import './Styling/Registercs.css';
import formicon from './Images/formicon.png'
function Registercs() {

    const projects = [
        'AI and ML-Based Intrusion Detection System (IDS) for Automotive CAN Bus Systems',
        '"CANcrypt" - Cryptographic Techniques for Securing the CAN Bus',
        'RKE Security Challenge: Defending Against Remote Keyless Entry Attacks',
        'OTA Update Security Challenge: Safeguarding Connected Devices and Vehicles',
        'Autonomous Vehicle Security Challenge: Defending Against Advanced Threats',
        'Vehicle Anomaly Detection Challenge: Securing Connected Cars with Machine Learning'
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
        fetch('https://script.google.com/macros/s/AKfycbzB3Z0-UFWQ7fw7B1JpY6BAvpgTtKQdolHlKno_S9QkNDgcxpnBnk16MdOfp1o658zd/exec', {
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
            <div className="Regcs" id='regcs'>
                <div className="title">
                    <a href="/"><img src={autownlogo} className="autownlogo"></img></a>
                    <span className="head">Registration</span>
                </div>
                <h1 className="heading">Automotive Cybersecurity</h1>
                <div className='regform' >

                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="subform" > <label htmlFor='name'>Name</label>
                                <input className='inparea1' autoComplete='off' name='csname' id='acsname'
                                    value={formInput.name}
                                    onChange={handleInput}
                                    type='text' placeholder='Name'></input>


                                <label htmlFor='email'>Email</label>
                                <input className='inparea1' autoComplete='off' name='csbitsemail' id='acsbitsemail'
                                    value={formInput.email}
                                    onChange={handleInput}
                                    type='text' placeholder='Email' ></input>


                                <label htmlFor='bitsid'>BITS ID</label>
                                <input className='inparea1' autoComplete='off' name='csbitsid' id='acsbitsid'
                                    value={formInput.bitsid}
                                    onChange={handleInput}
                                    type='text' placeholder='BITS ID' ></input>


                                <label htmlFor='No. of Participants'>No. of Participants</label>
                                <input className='inparea1' autoComplete='off' name='csparticipants' id='acsparticipants'
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
                                    <input type="radio" name="csproj" className="projarea" value={project} ></input>
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

export default Registercs;