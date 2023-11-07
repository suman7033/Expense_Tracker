import React from 'react';
import './welcome.css';

const welcome = () => {
  return (
    <>
    <div className='container'>
    <h5 className='mt-2 left'><b>Welcome to Expense Tracker</b></h5>
    <div>
       <h5 className=' mt-2 right'>Your profile is incomplete.<button className='button'><b>Complete Now</b></button>
       </h5>  
    </div>
  </div>
  <hr/>
  </>
  )
}

export default welcome
