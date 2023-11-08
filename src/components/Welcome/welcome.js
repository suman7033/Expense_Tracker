import {Link} from 'react-router-dom';
import React from 'react';
import './welcome.css';

const welcome = () => {
       const verifyEmailHandler=async()=>{
         alert("verify email")
           try{
             const res=await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAVZp_jrP3dadhs6I5prUzEgx_9XQz3HYw',
                {
                  method: 'POST',
                  body: JSON.stringify({
                    idToken: localStorage.getItem("idToken"),
                     requestType:'VERIFY_EMAIL',
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
             )
             const data=await res.json();
             //console.log(localStorage.getItem())
             console.log("Verify Data",data);
           } catch (err){
            console.log(err.response);
           }
       }
   
  return (
    <>
    <div className='container'>
    <h5 className='mt-2 left'><b>Welcome to Expense Tracker</b></h5>
    <div>
       <h5 className=' mt-2 right'>Your profile is incomplete.<Link className='button' to='/profile'><b>Complete Now</b></Link>
       </h5>  
    </div> &nbsp; &nbsp; &nbsp;
    <button  className='verifyBtn' onClick={verifyEmailHandler}>Verify Email</button>
  </div>
  <hr/>
   
  </>
  )
}

export default welcome
