import './Styling/Contactus.css';
import { useState } from 'react';
import bits_logo from './Images/bits_logo.png'
import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function ContactUs() {
    

    const [userInput , updateInput] = useState({
        fname:"",
        lname:"",
        email:"",
        message:""
    })
    let form = document.querySelector("form");
    const handleSubmit =(e) =>{
            e.preventDefault();
            let data = new FormData(form);
            fetch('https://script.google.com/macros/s/AKfycbyFOL0gVGBetGq-XbAjJ6NM1bvw5eWn8nEVGox2z7CZmMjwecUJr3Jy9bN_C-xWj1aM/exec',{
                method:"POST",
                body: data
            })
            .then(res => res.text())
            .then(window.location.href='/')
            .then(alert("sent!"))
     }
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;  
        updateInput({...userInput , [name]: value})
    }

   
    return (
        <>
            <div className="Contactus" id='contactus'>
                <div className="title">
                    Contact Us
                </div>
                <div className='contact' >
                    
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='fname'>First Name</label>
                        <input className='inparea1' autoComplete='off' name='fname' id='fname' required='true'
                            value={userInput.fname}
                            onChange={handleInput}
                        type='text' placeholder='First Name'></input>
                        <label htmlFor='lname'>Last Name</label>
                        <input className='inparea1' autoComplete='off' name='lname' id='lname' required='true'
                            value={userInput.lname}
                            onChange={handleInput}
                        type='text' placeholder='Last Name' ></input>
                        <label htmlFor='email'>Email</label>
                        <input className='inparea1' autoComplete='off' name='email' id='email' required='true'
                            value={userInput.email}
                            onChange={handleInput}
                        type='email' placeholder='Email' ></input>
                        <label htmlFor='email'>Contact Number</label>
                        <input className='inparea1' autoComplete='off' name='cnumber' id='cnumber' required='true'
                            value={userInput.pnumber}
                            onChange={handleInput}
                        type='number' placeholder='contact number' ></input>
                        <label htmlFor='message'>Message</label>
                        <input className='inparea2' autoComplete='off'  name='message'  id='message' required='true'
                            value={userInput.message}
                            onChange={handleInput}
                        type='text' placeholder='Message' ></input>
                        <input className='subarea' type="submit" value="Submit"></input>
                    </form>
                    <div className='contactside'>
                    <div className='projcoord'><span style={{fontSize:'24px',}}>Program Faculty Co-ordinator :</span><br></br><br></br><span style={{fontSize:'20px',}}> Rajiv Ranjan Gupta</span><br></br>Assistant Professor<br></br>BITS Pilani<br></br>Work Integrated Learning Program<br></br><a href='mailto:rajivranjan.gupta@pilani.bits-pilani.ac.in'><FaEnvelope/> rajivranjan.gupta@pilani.bits-pilani.ac.in</a><br></br></div>
                    <img className='sideimg' src={bits_logo}></img>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactUs;