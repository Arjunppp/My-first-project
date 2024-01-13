import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>    
        <div className='bg-gray-400 shadow-md flex 4 justify-evenly p-3 items-center'>
            <Link to="/">
            <h1 className='flex flex-wrap font-bold text-sm sm:text-xl '>
                <span className='text-slate-50'>Real</span>
                <span className='text-black'>Estate</span>
            </h1>
            </Link>
            <form className='bg-slate-50 rounded-lg p-3 flex'>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none'/>
                <FaSearch className='text-slate-600' />

            </form>
            <ul className='flex gap-4 justify-evenly'>

            <Link to="/about"><li className='hidden sm:inline text-black hover:text-white'>About</li></Link>
            <Link to="/profile"> <li className='hidden sm:inline text-black hover:text-white'>Profile</li></Link>
            <Link to="signin">  <li className=' text-black hover:text-white'>Sign In</li></Link>

                
                

            </ul>



        </div>
    </header>
  )
}
