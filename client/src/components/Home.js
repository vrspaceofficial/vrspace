import React, {useState, useEffect} from 'react'
import Content from './Content'

const Home = () => {
  const [userName, setuserName] = useState("")
  const [show, setShow] = useState(false);
  
  const callHome = async ()=>{
    try {
      const res = await fetch('/getData', {
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
  <div className="h-96 bg-slate-600 gray flex items-center justify-between">
    <div className='ml-32 text-white h-auto'>
      <p className='mb-4'>Be A Part Of Something Bigger</p>
      {/* <b className='ml-8 text-5xl font-thin'>{show?`${userName}`:'VR Space'}</b> */}
      <b className='ml-8 text-5xl font-thin'>VR Space</b>
  </div>
    <div className='homepic w-3/6 h-96'></div>
    </div>
    
</section>

    <Content/>
    </>
  )
}

export default Home