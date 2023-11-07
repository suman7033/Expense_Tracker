import {Link} from 'react-router-dom';
import React from 'react';
import './welcome.css';

const welcome = () => {
    
   
  return (
    <>
    <div className='container'>
    <h5 className='mt-2 left'><b>Welcome to Expense Tracker</b></h5>
    <div>
       <h5 className=' mt-2 right'>Your profile is incomplete.<Link className='button' to='/userDetails'><b>Complete Now</b></Link>
       </h5>  
    </div>
  </div>
  <hr/>
  <h1>{}</h1>
  </>
  )
}

export default welcome
