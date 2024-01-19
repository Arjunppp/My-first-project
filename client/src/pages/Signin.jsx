import React, { useState, useEffect } from 'react';
import { Link ,useNavigate } from 'react-router-dom'; 
import {  useDispatch, useSelector } from 'react-redux';
import { signInFailure ,signInStart , signInSucess } from '../redux/users/userSlice';

export default function Signin() {
  const [currentState, setState] = useState({ password: '', email: '' });  //this use state is used for tracking the state of credentials 
  // const [submitState, setSubmitState] = useState(true); //this useState is used for changing the text in submit button according to our need
  // const [{ err, errstatus }, setError] = useState({errstatus:false}); //to display the error , and error status determines the color as well as when to navigate etc.
  const {loading ,error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(event) {
         const { id, value } = event.target;
         setState((prevValue) => ({
                   ...prevValue,  //spread operator is used to have the previous value
               [id]: value, //it will change the changed value
                //this is an example of handling the changes locally
               }));
              }

  async function handleSubmit(event) {
         event.preventDefault();

         try{
          dispatch(signInStart());
          const res = await fetch('/api/auth/signin', {
                                     method: 'POST',
                                     headers: {
                                            'Content-Type': 'application/json',
                                               },
                                     body: JSON.stringify(currentState),
                                                      });
              
              const data = await res.json();
 
              if (data.sucess === false)
              {
               dispatch(signInFailure(data.message));
               return;
              }
              else{
               dispatch(signInSucess(data));
               navigate('/')  //useNavigate method of router dom is used to navigate to signin
             }
            }
            catch(error)
            {
              dispatch(signInFailure(error.message))
            }
         
    
    
  }

 


  return (
    <div>
      
      <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>
      <form className='flex flex-col gap-4 items-center'>
      <input type="text" autoComplete='off' onChange={handleChange} className='w-1/4 border p-3 rounded-lg' placeholder='Email' id="email" />
      <input type="password" onChange={handleChange} className='w-1/4 border p-3 rounded-lg' placeholder='Password' id='password' />
        
      <button disabled={!loading} onClick={handleSubmit} className='w-hangeborder p-3 rounded-lg uppercase  bg-black text-white hover:text-black hover:bg-white'>{loading === true ? "Sign in" : "Loading.."}</button>
      </form>
      <div className='flex gap-3 mt-5 justify-center'>
        <p>Do not Have an Account ?</p>
        <Link to='/signup'>
          <span className='text-blue-900'>Sign up</span>
        </Link>
      </div>

      <p className={ 'text-red-400 text-center font-semibold my-7'}>{error}</p> {/*this will have no use actually -- because now we are navigating to signin page directly */}
      
    </div>
  );
}