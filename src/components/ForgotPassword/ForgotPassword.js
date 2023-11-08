import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './forgotPassword.css';

const ForgotPassword = () => {
    const [modalEmail, setModalEmail]=useState(null);
    const [open, setOpen]=useState(false);
    const [email, setEmail]=useState("");
    const [loader, setLoader]=useState(false);

    const handleClose=()=>
        setOpen(false);

        const resetPasswordHandler=async()=>{
            try{
                const resetPassword=await fetch(
                    'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAVZp_jrP3dadhs6I5prUzEgx_9XQz3HYw',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            requestType: 'PASSWORD_RESET',
                            email: email,
                        }),
                        headers: {
                            "Content-Type": 'application/json',
                        },
                    }
                );
                if(resetPassword.ok){
                    const data=await resetPassword.json();
                    console.log("forgotPassword",data)
                    setLoader(true);
                    setTimeout(()=>{
                        setLoader(false);
                        setModalEmail(data.email);
                        setOpen(true);
                    },2000);
                }else{
                    alert("Invalid_Email")
                    setEmail("");
                }
            } catch(err){
                console.log(err.message);
            }
        }
  return (
    <>
       <div className='conta mt-2'>
        <h2>Forgot password</h2>
        <p>No worries, we'll send you reet instructions.</p>
        <div className='lable'>Email address</div><br/>
        <input className='input' onChange={(event)=>setEmail(event.target.value)}/><br/><br/>
         
        <button onClick={resetPasswordHandler} className='resetBtn'>Reset password</button><br/><br/>
        <Link to='/products'>Back to Login</Link><br/><br/>
        <h5 onClose={handleClose}>A password reset link has been sent to {modalEmail}</h5>
        <button className='ok'>Ok</button>
       </div>
    </>
  )
}

export default ForgotPassword
