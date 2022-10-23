import React from 'react';
import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container flex flex-col justify-center mx-auto h-screen items-center ">
        <div className="top flex justify-center ">
            <div className="text-9xl font-extrabold text-slate-300">404</div>
            <b className='text-red-400 text-3xl rotate-180 vertical-rl py-2'>ERROR</b>
        </div>
        <NavLink to="/"><p className='underline text-blue-700'>Back to Home Page</p></NavLink>
    </div>
  )
}

export default ErrorPage