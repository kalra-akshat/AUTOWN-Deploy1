import { useState } from "react"
import autownlogo from './Images/autownlogo.png'
import './Styling/Registeradas.css';
import formicon from './Images/formicon.png'
function Registeradas() {


    const projects = [
        "Autonomous Control Lightning Challenge",
        "Perception Fusion Showdown - Object & Lane Detection Duel",
        "SLAMMaster Mapping Race",
        "Stereoscopic Vision Depth Challenge"
    ]


    const [formInput, updateFormInput] = useState({
        name: "",
        bitsemail: "",
        bitsid: "",
        participants: "",
        proj: ""
    })

    let form = document.querySelector("form");

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbzsy6SWJ5JqBD3FRjsqf5tqBN6JqR8i2yiS7ves2BFWfksOurEIo0OmPp7gg0_Eejnc/exec', {
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
            <div className="Regadas" id='regadas'>
                <div className="title">
                    <a href="/"><img src={autownlogo} className="autownlogo"></img></a>
                    <span className="head">Registration</span>
                </div>
                <h1 className="heading">Advanced driver-assistance system</h1>
                <div className='regform' >

                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="subform" > <label htmlFor='name'>Name</label>
                                <input className='inparea1' autoComplete='off' name='name' id='name' required="true"
                                    value={formInput.name}
                                    onChange={handleInput}
                                    type='text' placeholder='Name'></input>


                                <label htmlFor='email'>Email</label>
                                <input className='inparea1' autoComplete='off' name='bitsemail' id='bitsemail' required="true"
                                    value={formInput.email}
                                    onChange={handleInput}
                                    type='email' placeholder='Email' ></input>


                                <label htmlFor='bitsid'>BITS ID</label>
                                <input className='inparea1' autoComplete='off' name='bitsid' id='bitsid' required="true"
                                    value={formInput.bitsid}
                                    onChange={handleInput}
                                    type='text' placeholder='BITS ID' ></input>


                                <label htmlFor='No. of Participants'>No. of Participants</label>
                                <input className='inparea1' autoComplete='off' name='participants' id='participants' required="true"
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
                                    <input type="radio" name="proj" className="projarea" value={project} ></input>
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

export default Registeradas;