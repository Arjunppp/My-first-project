import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [currentState, setState] = useState({ username: '', password: '', email: '' });
  const [submitState, setSubmitState] = useState(true);
  const [error, setError] = useState('');

  function handleChange(event) {
         const { id, value } = event.target;
         setState((prevValue) => ({
                   ...prevValue,
               [id]: value,
               }));
              }

  async function handleSubmit(event) {
         event.preventDefault();
         setSubmitState(false);
         const res = await fetch('/api/auth/signup', {
                                    method: 'POST',
                                    headers: {
                                           'Content-Type': 'application/json',
                                              },
                                    body: JSON.stringify(currentState),
                                                     });
             setSubmitState(true);
             const data = await res.json();
              setError(data.message);
               setTimeout(() => {
                            setError('');
                       }, 1000);

    
    
  }

 


  return (
    <div>
      
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 items-center'>
        <input type="text" autoComplete='off' onChange={handleChange} className='w-1/4 border p-3 rounded-lg' placeholder='Username' id='username' />
        <input type="password" onChange={handleChange} className='w-1/4 border p-3 rounded-lg' placeholder='Password' id='password' />
        <input type="text" autoComplete='off' onChange={handleChange} className='w-1/4 border p-3 rounded-lg' placeholder='Email' id="email" />
        <button onClick={handleSubmit} className='w-hangeborder p-3 rounded-lg uppercase hover:opacity-50 bg-black text-white'>{submitState === true ? "Sign Up" : "Loading.."}</button>
      </form>
      <div className='flex gap-3 mt-5 justify-center'>
        <p>Have an Account ?</p>
        <Link to='/signin'>
          <span className='text-blue-900'>Sign in</span>
        </Link>
      </div>

      <p className='text-red-400 text-center font-semibold my-7'>{error}</p>
    </div>
  );
}