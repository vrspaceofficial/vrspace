import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

    <div className="bg-slate-700 py-5 cursor-default font-thin">
        <div className="flex w-8/12 mx-auto justify-between">
        <p className='text-slate-200'>All Rights reserved</p>
        <p className='text-slate-200'>|</p>
        <p className='text-slate-200'>&copy;VR Space Official 2020</p>
        <p className='text-slate-200'>|</p>
        <p className='text-slate-200'>All Prices Include GST</p>
        <p className='text-slate-200'>|</p>
        <Link to="https://www.freepik.com/free-vector/engineers-cartoon-set_4005767.htm#query=worker&position=14&from_view=search&track=sph">

        <p className='text-slate-200'>credits</p>
        </Link>
        </div>
    </div>
    </>
  )
}

export default Footer