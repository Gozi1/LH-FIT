import React from 'react';
import { BsSearch, BsList, BsX } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const navbar = () => {
	const router = useRouter()
	const menuRef = useRef()
	const [cookies,setCookies] = useCookies(['user'])
	const [mobileMenu, setMobileMenu] = useState(false)
	const [user,setUser] = useState(null)

	
	useEffect(() => {
      let handler = (e) =>{
				
        if(!menuRef.current.contains(e.target)){
          setMobileMenu(false)
        }
			}      
      document.addEventListener('mousedown',handler)
			//Important you need to set the cookie you want to use to a state variable  unless you get hydration errors
			setUser(cookies.user)
			
  });
	return (
		<nav className='nav'>
			<section className='mobile-menu' ref={menuRef}>
				{!mobileMenu && <BsList onClick={() => setMobileMenu(true)} />}
				{mobileMenu && <BsX onClick={() => setMobileMenu(false)} />}
				<p className='mobile-icon'>Menu</p>

				<ul
					className={mobileMenu ? 'mobile-menu-show' : 'mobile-menu-hide'}
					
				>
					<li
						onClick={() => {
							router.push('/create-a-workout');
						}}
					>
						Create Workout
					</li>
					<li>{user}</li>
					<li
						onClick={() => {
							router.push('/search');
						}}
					>
						Explore
					</li>
					<li
						onClick={() => {
							router.push('/login');
						}}
					>
						Login
					</li>
					<li
						onClick={() => {
							router.push('/signup');
						}}
					>
						SignUp
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default navbar;

