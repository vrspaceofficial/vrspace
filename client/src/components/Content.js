import React from 'react';


const Content = () => {
  return (<>
  
    <div className="h-64 sm:h-96 flex  items-center mx-auto">
      <div className='slt-1 w-5/12 h-full relative top-0 '></div>
      <div className='sm:w-3/12 w-6/12 ml-5 sm:ml-44 hover:cursor-default'>
        <h1 className=' text-2xl sm:text-3xl '>AR GENIE Glass</h1>
        <p className='mt-3 text-xs sm:text-base capitalize'>The Genie AR Glasses can be used in various sectors millitary, educational, health, SpaceResearch Learning and development Sports, Entertainment and even for conference meetings and many more. <span className='text-xs hover:cursor-pointer hover:text-yellow-900 font-bold text-blue-800'>coming soon..</span></p>
      </div>
    </div>



    <div className="h-64 sm:h-96 flex  items-center justify-end mx-auto">
      <div className='sm:w-3/12 w-6/12 sm:mr-44 mr-5 hover:cursor-default'>
        <h1 className='text-2xl sm:text-3xl'>AR GENIE Glass</h1>
        <p className='mt-3 text-xs sm:text-base capitalize'>The Genie AR Glasses can be used in various sectors millitary, educational, health, SpaceResearch Learning and development Sports, Entertainment and even for conference meetings and many more. <span className='text-xs hover:cursor-pointer hover:text-yellow-900 font-bold text-blue-800'>coming soon..</span></p>
      </div>
      <div className='slt-2 w-5/12 h-full relative right-0 '></div>
    </div>
    </>
  )
}

export default Content  