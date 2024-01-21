import React, { useState, useEffect } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function Signup() {
  const [currentState, setState] = useState({ username: '', password: '', email: '' });  //this use state is used for tracking the state of credentials 
  const [submitState, setSubmitState] = useState(true); //this useState is used for changing the text in submit button according to our need
  const [{ err, errstatus }, setError] = useState({errstatus:false}); //to display the error , and error status determines the color as well as when to navigate etc.
  const navigate = useNavigate();//useNavigate is an react-router-dom hook to navihate
  

  function handleChange(event) {
         const { id, value } = event.target;
         setState((prevValue) => ({
                   ...prevValue,  //spread operator is used to have the previous value
               [id]: value, //it will change the changed value which triggered the handlechange
               }));
              }

  async function handleSubmit(event) {
         event.preventDefault(); //used to prevent  the default behaviour  of an event 
         setSubmitState(false);


         try {
         const res = await fetch('/api/auth/signup', {
                                    method: 'POST',
                                    headers: {
                                           'Content-Type': 'application/json',
                                              },
                                    body: JSON.stringify(currentState),
                                                     });
            const data = await res.json();
             setSubmitState(true);
             setError({ err: data.message, errstatus: data.sucess}); 

             if ( data.sucess !== false)
            {
              navigate('/signin')  //useNavigate method of router dom is used to navigate to signin
            }
         
            setTimeout(() => {
              setError({});
            }, 2000);
         }
         catch(error)
         {
          console.error(error)
         }
    
    
  }

  

 


  return (
    <div>
      
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 items-center'>
        <input type="text" autoComplete='off' onChange={handleChange} className='w-1/4 border p-3 rounded-lg' placeholder='Username' id='username' />
        <input type="password" onChange={handleChange} className='w-1/4 border p-3 rounded-lg' placeholder='Password' id='password' />
        <input type="text" autoComplete='off' onChange={handleChange} className='w-1/4 border p-3 rounded-lg' placeholder='Email' id="email" />
        <button disabled ={!submitState} onClick={handleSubmit} className='w-border p-3 rounded-lg uppercase  bg-black text-white hover:text-black hover:bg-white'>{submitState === true ? "Sign Up" : "Loading.."}</button>
        <OAuth />
      </form>

    
      <div className='flex gap-3 mt-5 justify-center'>
        <p>Have an Account ?</p>
        <Link to='/signin'>
          <span className='text-blue-900'>Sign in</span>
        </Link>
      </div>

      <p className={errstatus === false ? 'text-red-400 text-center font-semibold my-7' : 'text-green-500 text-center font-semibold my-7'}>{err}</p> {/*this will have no use actually -- because now we are navigating to signin page directly */}
      
    </div>
  );
}