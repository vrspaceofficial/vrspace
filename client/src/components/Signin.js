import React, {useState, useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import userImg from '../images/user.svg'
import userPass from '../images/password.png'
import logImg from '../images/login.jpg'
import { UserContext } from '../App';
import { initialState, reducer } from '../reducer/UseReducer';


 
const Signin = () => {
  const {state, dispatch } = useContext(UserContext)
  const navigate = useNavigate();

  const LoginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch('https://vr-space-official.herokuapp.com/signin', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
        // "Access-Control-Allow-Credentials": true
      },
      body:JSON.stringify({
        email, password
      })
    })

    const data = res.json();
    if(res.status===401||!data){
      window.alert("Login Failed");
    }
    else{
      dispatch({type:"USER", payload:true})
      window.alert("Login Successfull");
      navigate("/")
    }
  }


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  return (
    <>
 <div className='my-20'>
  <div className="flex items-center w-10/12 mx-auto  py-6 px-4 rounded-2xl shadow-lg shadow-slate-700">
  <div className="input w-10/12 sm:w-1/2 flex items-center flex-col ">
          <h1 className=' text-4xl relative right-5 mb-3 hover:cursor-default'>Sign In</h1>
          <form className='overflow-hidden ml-4 mt-5 w-full sm:w-auto' method="POST">
            <div className="inline-flex space-x-2"><label htmlFor="email"> <img width="30px" src={userImg} alt="user:" /> </label>
            <input type="email" name='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email' className='px-3 py-1 bdr placeholder-slate-300 text-slate-600 relative bg-white text-sm border-slate-300' /></div><br />
            <div className="inline-flex mt-2 space-x-2"><label htmlFor="password"> <img width="30px" src={userPass} alt="password:r" /> </label>
            <input type="password" name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter your password'  className='px-3 py-1 bdr placeholder-slate-300 text-slate-600 relative bg-white text-sm border-slate-300'/></div><br /><br />  
            <center><input type="submit" value="Log In" onClick={LoginUser}  className='hover:cursor-pointer px-4 py-2 text-center bg-green-600 rounded-lg text-slate-100'/></center>
          

          </form>
            <div className="mt-10 ">If you are not Registered? &nbsp;<NavLink to="/signup"> <span className='underline text-blue-600'>Register</span></NavLink></div>
        </div>
        <div className="hidden sm:flex img w-1/2  items-center flex-col ">
          <img src={logImg} width="100%"  alt="WELCOME SIR" />
        </div>
  </div>
  
 </div>
    </>
  )
}

export default Signin
