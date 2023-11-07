import { useRef} from 'react'
import './userDetails.css'
import { useNavigate } from 'react-router-dom';
const UserDetails = () => {
    const navigate=useNavigate();
    console.log("profile");
    const nameHandler=useRef();
    const photoHandler=useRef();

    const updateHandler=async(e)=>{
        e.preventDefault();
        const enteredName=nameHandler.current.value;
        const enteredPhoto=photoHandler.current.value;

        const res=await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAVZp_jrP3dadhs6I5prUzEgx_9XQz3HYw',
            {
                method: 'POST',
                body: JSON.stringify({
                   name: enteredName,
                   photourl: enteredPhoto,
                   returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(res=>{
            console.log("profile",res);
            navigate('/products');
        })
    }
  return (
    <div>
      <h3><b>Contact Details</b></h3> <h5 className='cancelDiv'><button className='cancelBtn'>cancle</button></h5>
      <b> &nbsp; &nbsp; &nbsp;Full Name: &nbsp; &nbsp; &nbsp;</b><input type='text' className='input' required ref={nameHandler}/><br/><br/>
      <b>Profile Photo Url </b><input type='text' className='input' required ref={photoHandler}/><br/><br/>
      <button className='updateBtn' onClick={updateHandler}>Update</button>
    </div>
  )
}

export default UserDetails
