import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [msgError, setMsgError] = useState(false)

    const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    function handleName(e) {
        let name = e.target.value;
        if (name.length < 3) {
            setNameError(true)
        }
        else {
            setNameError(false)
        }
    }


    function handleEmail(e) {
        let email = e.target.value;
        if (!email.match(EmailRegex)) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
    }

    function handleMsg(e) {
        let msg = e.target.value;
        if (msg.length < 8) {
            setMsgError(true)
        }
        else {
            setMsgError(false)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        alert("Message Send");
        let name = e.target[0].value
        if (name.length < 3) {
            setNameError(true)
        }
        else {
            setNameError(false)
        }
        let email = e.target[1].value
        if (!email.match(EmailRegex)) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
        let msg = e.target[2].value
        if (msg.length < 8) {
            setMsgError(true)

        } else {
            setMsgError(false);
        }

        axios.post("https://6437a3340c58d3b145754311.mockapi.io/API/CRUD",{
            name : name,
            email : email,
            msg : msg
        })
        .then((res)=>{
            console.log(res)
        })
    }
;
    return (
        <>
            <div className="container contact">
                <div className="row justify-content-center">
                    <h1 className='text-center'>Contact US</h1>
                    <div className="col-md-6">
                        <form className='shadow p-5' onSubmit={handleSubmit}>
                            <input type="text" className='form-control' placeholder='Enter Your Name' name='name' value={name} required
                                onChange={handleName}
                            /> {nameError ? <span style={{ color: "red" }}>You must have more then 3 character</span> : ""}
                            <input type="text" className='form-control' placeholder='Enter Your Email' name='email' value={email} required
                                onChange={handleEmail}
                            /> {emailError ? <span style={{ color: "red" }}>Invalid Email</span> : ""}
                            <textarea name="msg" id="" cols="30" rows="10" className='form-control' placeholder="Enter Your Message" value={msg} required onChange={handleMsg} /> {msgError ? <span style={{ color: "red" }}> You must have more then  8 character</span> : ""}
                            <br />
                            <button className='btn btn-danger'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact