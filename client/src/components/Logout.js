import React, {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { initialState, reducer } from '../reducer/UseReducer';




const Logout = () => {
    const {state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("/logout", {
            method:"GET",
            headers:{
                Accept:"application/json",
                'Content-Type':"application/json"
            }, 
            credentials:"include" 


        }).then((res)=>{
            dispatch({type:"USER", payload:false})
            navigate('/signin');
            if(res.status != 200){
                throw new Error(res.error)
            }
        }).catch((err)=>{
            console.log(err)
        })
    },[])





  return (
    <></>
  )
}

export default Logout