import React from 'react'
import {BsSearch,BsList,BsX} from 'react-icons/bs'
import { useState } from 'react'
const navbar = () => {
  const [mobileMenu,setMobileMenu] = useState(false)
  return (
    <nav className = 'nav'> 
  <div className='mobile-menu'>
      
    {!mobileMenu && <BsList onClick={()=>setMobileMenu(true)}/>}
    {mobileMenu && <BsX onClick={()=>setMobileMenu(false)}/> }
    <a className='mobile-icon'>Menu</a>
    
    <ul className = {mobileMenu ? 'mobile-menu-show':'mobile-menu-hide'}>
    <li><a>Create Workout</a></li>
    <li><a>Explore</a></li>
    <li><a>Login</a></li>
    <li><a>SignUp</a></li>
    </ul> 
    </div>  
   </nav> 
  )
}

export default navbar