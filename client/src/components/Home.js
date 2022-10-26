import React, {useState, useEffect} from 'react'
import Content from './Content'

const Home = () => {
  const [userName, setuserName] = useState("")
  const [show, setShow] = useState(false);
  
  const callHome = async ()=>{
    try {
      const res = await fetch('https://vr-space-official.herokuapp.com/getData', {
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
  

      const data = await res.json();
      setuserName(data.name)
      // alert(`welcome ${data.name}`)
      setShow(true)
      
      
    } catch(error) {
      console.log(error);
     
    }

  }


  useEffect(()=>{
      callHome();
  }, [])


  return (

    <> 
<section>
  <div className="sm:h-96 h-52 bg-slate-600 gray flex items-center justify-between">
    <div className='flex flex-col text-white h-auto mx-auto w-6/12'>
      <p className='text-center mx-2 text-xs sm:text-base mb-4'>Be A Part Of Something Bigger</p>
      {/* <b className='ml-8 text-5xl font-thin'>{show?`${userName}`:'VR Space'}</b> */}
      <b className=' sm:text-5xl mx-auto text-3xl font-thin '>VR Space</b>
  </div>
    <div className='homepic w-3/6 sm:h-96 h-52 ' ></div>
    </div>
    
</section>

    <Content/>
    </>
  )
}

export default Home