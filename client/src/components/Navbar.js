import React, {useContext} from 'react'
import style from '../index.css'
import {NavLink} from 'react-router-dom'
import { UserContext } from '../App'



const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);
  const Render = ()=>{
    if(state){
      return(
        <>
         <NavLink to="/"><li className='hover:text-slate-300 hover:cursor-pointer '>Home</li></NavLink>
        <NavLink to="/about"><li id="abt" className='hover:text-slate-300 hover:cursor-pointer '>About</li></NavLink>
       <NavLink to="contact"> <li className='hover:text-slate-300 hover:cursor-pointer '>Contact</li></NavLink>
        <NavLink to="/logout"><li className='hover:text-slate-300 hover:cursor-pointer '>Logout</li></NavLink>

        </>
      )
    }
    else{
      return(
        <>
         <NavLink to="/"><li className='hover:text-slate-300 hover:cursor-pointer '>Home</li></NavLink>
        <NavLink to="/about"><li id="abt" className='hover:text-slate-300 hover:cursor-pointer '>About</li></NavLink>
       <NavLink to="contact"> <li className='hover:text-slate-300 hover:cursor-pointer '>Contact</li></NavLink>
        <NavLink to="/signin"><li className='hover:text-slate-300 hover:cursor-pointer '>Sign In</li></NavLink>
        
        </>
      )
    }
  }
  return (
   <>
   <nav className='z-10 top-0 sticky flex justify-between px-5 py-4 bg-slate-700 text-white  items-center'>
    <div className='text-2xl text-slate-100 hover:cursor-default' >VR Space</div>
    <ul className='flex space-x-4 px-2 hover:cursor-default'>
      <Render/>
    </ul>
   </nav>
   </>
  )
}

export default Navbar