import React from 'react'
import {GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../OAuth/firebaseConfig';
import {useDispatch} from 'react-redux';
import { signInSucess } from '../redux/users/userSlice';
import { useNavigate } from 'react-router-dom';



export default function OAuth() {


    const navigate = new useNavigate();
    const dispatch = useDispatch();
    const handleOAuth = async (event) => 
    {
        
        try{
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup (auth ,provider);
            const userdata = { name :result.user.displayName,email :result.user.email ,photoURL : result.user.photoURL};
            const res = await fetch ('api/auth/google',{
                method: 'POST',
                headers: {
                       'Content-Type': 'application/json',
                          },
                body: JSON.stringify(userdata),
                                 });

             const data = await res.json();
              dispatch(signInSucess(data));
              navigate('/');

        }catch(error)
        {
                console.error("Could not sign in" , error)
        }

    }
  return (
    <button onClick={handleOAuth} type='button' className='w-1/4 bg-black text-white  border p-3 rounded-lg hover:bg-white hover:text-black'>Login With Google</button>
  )
}
