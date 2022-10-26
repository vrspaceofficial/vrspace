import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import userPass from '../images/password.png'
import signupImg from '../images/signup.jpg';
import nameImg from '../images/name.svg';
import emailImg from '../images/email.svg';
import phoneImg from '../images/phone.svg';



 
const Signup = () => {
 
  const navigate = useNavigate();
 
  const [user, setUser] = useState({
    name:"", email:"", phone:"", password:"", cpassword:""
  })
  let name, value;

  const handleInputs = (e)=>{
    name = e.target.name;
    value= e.target.value;

    setUser({...user, [name]:value})
  }
  
  const postData = async(e)=>{
    e.preventDefault();
    const {name, email, phone, password, cpassword}=user;
    const res = await fetch("http://vr-space-official.herokuapp.com/register", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name, email, phone, password, cpassword
      })
    })

    const data = await res.json();
    if(res.status===422||!data){
      window.alert("Invalid Registeration")
    }else{
      window.alert("Registeration Successfull")
      navigate("/signin")
    }
  }

    

  




  return (
    <>
 <div className=' my-14'>
  <div className="flex items-center w-10/12 mx-auto  py-6 px-4 rounded-2xl shadow-lg shadow-slate-700">
  <div className="input w-10/12 sm:w-1/2 flex items-center flex-col ">
          <h1 className=' text-4xl relative right-5 mb-3 hover:cursor-default'>Sign Up</h1>
          <form className='ml-4 mt-5 overflow-hidden' method="POST">

          <div className="inline-flex space-x-2 mb-4"><label htmlFor="fname"  className='mr-3'> <img width="20px" src={nameImg} alt="name:"/> </label>
            <input type="text" name='name' placeholder='Full name' value={user.name} onChange={handleInputs} className='px-3 py-1 bdr placeholder-slate-300 text-slate-600 relative bg-white text-sm border-slate-300' /></div><br />

            <div className="inline-flex space-x-2 mb-4"><label htmlFor="email" className='mr-3'> <img width="20px" src={emailImg} alt="email:" /> </label>
            <input type="email" name='email' placeholder='Email' value={user.email} onChange={handleInputs} className='px-3 py-1 bdr placeholder-slate-300 text-slate-600 relative bg-white text-sm border-slate-300' /></div><br />

            <div className="inline-flex space-x-2 mb-4"><label htmlFor="phone" className='mr-3'> <img width="20px" src={phoneImg} alt="phone:" /> </label>
            <input type="number" name='phone' placeholder='Phone' value={user.phone} onChange={handleInputs} className=' px-3 py-1 bdr placeholder-slate-300 text-slate-600 relative bg-white text-sm border-slate-300' /></div><br />

            <div className="inline-flex mt-2 space-x-2 mb-4"><label htmlFor="password" className='mr-3'> <img width="20px" src={userPass} alt="password:" /> </label>
            <input type="password" name='password' placeholder='Create password' value={user.password} onChange={handleInputs} className='px-3 py-1 bdr placeholder-slate-300 text-slate-600 relative bg-white text-sm border-slate-300'/></div><br />

            <div className="inline-flex mt-2 space-x-2 mb-4"><label htmlFor="cpassword" className='mr-3'> <img width="20px" src={userPass} alt="confirm password:" /> </label>
            <input type="password" name='cpassword' placeholder='Confirm password' value={user.cpassword} onChange={handleInputs} className='px-3 py-1 bdr placeholder-slate-300 text-slate-600 relative bg-white text-sm border-slate-300'/></div><br /><br />  

            <center><input type="submit" value="Register" onClick={postData} className='hover:cursor-pointer px-4 py-2 text-center bg-green-600 rounded-lg text-slate-100 bdr'/></center>
          

          </form>
            <div className="mt-5 ">I'm Alreadey having an account ! &nbsp;<NavLink to="/signin"> <span className='underline text-blue-600'>Log In</span></NavLink></div>
        </div>
        <div className="img w-1/2 hidden sm:flex items-center flex-col ">
          <img src={signupImg} width="100%"  alt="WELCOME SIR" />
        </div>
  </div>
  
 </div>
    </>
  )
}

export default Signup
