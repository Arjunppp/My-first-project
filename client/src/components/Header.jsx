import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>    
        <div className='bg-orange-200 shadow-md flex 4 justify-evenly p-3 items-center'>
            <Link to="/">
            <h1 className='flex flex-wrap font-bold text-sm sm:text-xl '>
                <span className='text-lime-950'>Real</span>
                <span className='text-black'>Estate</span>
            </h1>
            </Link>
            <form className='bg-slate-50 rounded-lg p-3 flex w-2/5'>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none flex-1' />
                <FaSearch className='text-l ml-2' />
            </form>
            <ul className='flex gap-4 justify-evenly'>

            <Link to="/"><li className='hidden sm:inline text-black hover:text-white'>Home</li></Link>
            <Link to="/about"> <li className='hidden sm:inline text-black hover:text-white'>About</li></Link>
            <Link to="signin">  <li className=' text-black hover:text-white'>Sign In</li></Link>

                
                

            </ul>



        </div>
    </header>
  )
}
