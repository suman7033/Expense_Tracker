import React from 'react'
import {useRef,useNavigate,useEffect} from 'react';
import './profile.css';

const Profile = () => {

  //const navigate=useNavigate();
  console.log("profile");
  const nameHandler=useRef();
  const photoHandler=useRef();

  useEffect(()=>{
     const fetchData=async()=>{
       try{
         const getData=await fetch(
           'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAVZp_jrP3dadhs6I5prUzEgx_9XQz3HYw',
           {
            method: 'POST',
            body: JSON.stringify({
              idToken: localStorage.getItem("tokenId"),
              idToken: localStorage.getItem("idToken"),
            }),
            headers: {
              'Content-Type':'application/json', 
            }
           }
         )
         if(!getData.ok){
           //alert("something wronge");
           throw new Error('Network response was not ok');
         }
         const data=await getData.json();
           nameHandler.current.value=data.users[0].Displayname;
           photoHandler.current.value=data.users[0].photourl;
           console.log("get api Data",data);
       }catch(error){
          console.log(error);
       }
     };
     fetchData();
  },[]);

  const updateHandler=async(e)=>{
      e.preventDefault();
      const enteredName=nameHandler.current.value;
      const enteredPhoto=photoHandler.current.value;
    try{
      const res=await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAVZp_jrP3dadhs6I5prUzEgx_9XQz3HYw',
          {
              method: 'POST',
              body: JSON.stringify({
                idToken: localStorage.getItem('tokenId'),
                 Displayname: enteredName,
                 photourl: enteredPhoto,
                 returnSecureToken: true,
              }),
              headers: {
                  'Content-Type': 'application/json'
              }
          }
      )
      const data=await res.json();
      console.log(data);
        }catch(err){
          console.log(err.message);
        }
      }     
  return (
    <div>
      <div className='maindiv'>
      <h5 className='cancelDiv'><button className='cancelBtn'>cancle</button></h5>
      <h3><b>Contact Details</b></h3>
      <b> &nbsp; &nbsp; &nbsp;Full Name: &nbsp; &nbsp; &nbsp;</b><input type='text' className='input' required ref={nameHandler}/><br/><br/>
      <b>Profile Photo Url </b><input type='text' className='input' required ref={photoHandler}/><br/><br/>
      <button className='updateBtn' onClick={updateHandler}>Update</button>
    </div>
    </div>
  )
}

export default Profile
