import React from 'react'

const DetailFooter = () => {
    return (
        <>
            <div className="bg-slate-700 py-10 text-white">
                {/* first part */}
                <div className='flex flex-col items-center md:flex-row w-10/12 mx-auto justify-between'>
                    <p className='md:w-4/12 w-8/12 mb-2 sm:mb-0 text-center'>Stay up to date! We send out a newsletter
                        twice a week with our latest news.</p>
                    <div className="mt-3 md:mt-0 flex items-center justify-between mx-auto sm:mx-0 sm:w-8/12 md:w-5/12">
                         <input type="email" name="mailSend" placeholder='Enter your email' className='text-purple-700 rounded-3xl h-10 px-4 py-auto border-pink-800 sm:w-72 w-7/12 '/>
                    <button name="mailSend" className='px-4 bg-slate-500 rounded-3xl text-xs h-10 border-2 border-slate-800 sm:  hover:border-slate-900 hover:bg-slate-400 hover:text-slate-900'>Send Me<br/> collections</button>
                    </div>
                </div>

                {/* second part */}

                <div className='flex justify-between w-10/12 mx-auto mt-16'>
                    <div className=' w-3/12 flex flex-col items-center '>
                        <h3 className=''><span className='text-xl'>C</span>ustomer <span className='text-xl'>S</span>ervice</h3>
                        <ul className='text-small'>
                            <li className='cursor-pointer hover:underline hover:text-slate-300'>Contact Us</li>
                            <li className='cursor-pointer hover:underline hover:text-slate-300'>Privacy & Statement</li>
                            <li className='cursor-pointer hover:underline hover:text-slate-300'>Terms & Conditions</li>
                            <li className='cursor-pointer hover:underline hover:text-slate-300'>FAQ</li>
                        </ul>
                    </div>
                    <div className=' w-3/12 flex flex-col items-center '>
                        <h3 className=''><span className='text-xl'>A</span>bout <span className='text-xl'>U</span>s</h3>
                        <ul className='text-small'>
                            <li className='cursor-pointer hover:underline hover:text-slate-300'>Our Story</li>
                            <li className='cursor-pointer hover:underline hover:text-slate-300'>Team</li>
                            <li className='cursor-pointer hover:underline hover:text-slate-300'>Marketing</li>
                            <li className='cursor-pointer hover:underline hover:text-slate-300'>Careers</li>
                        </ul>
                    </div>
                    
                    <div  className=' w-3/12 flex flex-col items-center '>
                    <h3 className=''><span className='text-xl'>K</span>eep In<span className='text-xl'>T</span>ouch</h3>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailFooter