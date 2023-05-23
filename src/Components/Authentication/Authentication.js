import React, {useState} from 'react';
import './Authentication.css'
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';


function Authetication() {
  const [active, setActive] = useState('login')
  
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login")
  };

 
  return (
    <div className='authentication'>
      <div className='auth__left'>
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt=""></img>
      </div>
      <div className='auth__right'>
        {active === "login" ? (<LogIn/>) : (<SignUp/>)}
        <div className='auth__more'>
          
          <span>
          {active === "login" ? (<>Don't have an account? <button onClick={handleChange}>Sign Up</button> </>) : (<>Have have an account? <button  onClick={handleChange}>Log in</button></>)}
            
      
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default Authetication
