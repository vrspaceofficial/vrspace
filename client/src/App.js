import logo from './logo.svg';
import './App.css';
import { createContext, useReducer } from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin'
import ErrorPage from './components/ErrorPage';
import Signup from './components/Signup';
import Footer from './components/Footer';
import DetailFooter from './components/DetailFooter';
import Logout from './components/Logout';
import {initialState, reducer} from "./reducer/UseReducer"



export const UserContext = createContext();
const Routing = ()=>{
  return(
    <>
     <Routes>

<Route path='/' exact element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/logout' element={<Logout/>}/>
<Route path="*" element={<ErrorPage/>}/>

</Routes>

<Routes>
<Route path='/' exact element={<DetailFooter/>}/>
</Routes>
    </>
  )
} 
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <><UserContext.Provider value={{state, dispatch}}>
      
    <Navbar/>
    
    <Routing/>
    
    <Footer/>
    </UserContext.Provider>
    </>
  );
}

export default App;
