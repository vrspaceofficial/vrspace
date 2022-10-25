
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  
  const navigate =useNavigate();
  const [Data, setData] = useState({name:"", phone:"", email:"", message:""});
  const callAbout = async()=>{
  try {
    const res = await fetch('/getData', {
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });

    console.log(res)
    
    
    if(!res.status===200){
     throw new Error("Error")
    }
    const data = await res.json();
    setData({...Data, name:data.name, phone:data.phone, email:data.email})
    
    
  } catch(error) {
    console.log(error);
    navigate("/signin")
  }
}


useEffect(()=>{
  callAbout();
},[])
const handleInputs =(e)=>{
  let name=e.target.name;
  let value=e.target.value;

  setData({...Data, [name]:value})
}

const contactFrom = async(e)=>{
  e.preventDefault();
  const {name, email, phone, message} = Data;
  const res = await fetch('/contact',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name, phone, email, message
    })
  })

  const data = await res.json();

  if(!data){
    console.log("message not sended")
  }else{
    alert("message sended successfully")
    setData({...Data, message:""})
  }

}


  return (
    <div className="my-10 ">
     <div className="w-10/12 my-16 mx-auto flex justify-between ">
      <div className="w-3/12 shadow-md rounded-md shadow-slate-400 py-2 px-2 bg-slate-100"><b>Name</b><div>{Data.name}</div></div>
      <div className="w-3/12 shadow-md rounded-md shadow-slate-400 py-2 px-2 bg-slate-100"><b>Email</b><div>{Data.email}</div></div>
      <div className="w-3/12 shadow-md rounded-md shadow-slate-400 py-2 px-2 bg-slate-100"><b>Phone</b><div>{Data.phone}</div></div>
     </div>

     <form method='POST' className="w-10/12 mx-auto rounded-md shadow-xl bg-slate-100 shadow-slate-400  py-5 border-y border-slate-100">
        
            <h1 className='ml-6 font-bold'>From</h1> 
          <div className="w-10/12 h-16 justify-between mx-auto flex">
            <input type="text" className='bdr capitalize h-10 w-1/4 bg-slate-100' placeholder='Name' name='name' value={Data.name} onChange={handleInputs}/>
            <input type="number" className='bdr h-10 w-1/4 bg-slate-100' placeholder='Phone' name='phone' value={Data.phone} onChange={handleInputs}/>
            <input type="email" className='bdr h-10 w-1/4 bg-slate-100' placeholder='Email' name='email' value={Data.email} onChange={handleInputs}/>
          </div>
          <h1 className='mt-7 ml-6 font-bold'>Content</h1>
          <div className="my-4 w-8/12 mx-auto flex  justify-center">

            <textarea name="message" value={Data.message} onChange={handleInputs} className='w-11/12 border-2 border-slate-400 rounded-md focus:border-green-900 focus:outline-none px-4 py-4' placeholder='Suggestion or Comments or etc..' id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Send" onClick={contactFrom} className='px-4 py-auto bg-green-600 rounded-lg h-10 hover:cursor-pointer text-white border-green-600 border relative top-56 ml-5' />
          </div>
     </form>

    </div>
  )
}
export default Contact